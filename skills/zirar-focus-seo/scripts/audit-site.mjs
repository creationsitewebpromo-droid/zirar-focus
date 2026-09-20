#!/usr/bin/env node

import { writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const baseInput = args.find((arg) => !arg.startsWith('--')) ?? 'https://zirar-focus.fr';
const outputIndex = args.indexOf('--output');
const outputPath = outputIndex >= 0 ? args[outputIndex + 1] : undefined;
const base = new URL(baseInput.endsWith('/') ? baseInput : `${baseInput}/`);
const remapToBase = (value) => {
  const discovered = new URL(value);
  return new URL(`${discovered.pathname}${discovered.search}`, base).href;
};

const decodeXml = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replaceAll('&quot;', '"')
  .replaceAll('&apos;', "'");

const stripTags = (value = '') => value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const firstMatch = (html, pattern) => pattern.exec(html)?.[1]?.trim() ?? '';
const allMatches = (html, pattern) => [...html.matchAll(pattern)].map((match) => match[1]);

async function fetchText(url) {
  const response = await fetch(url, { redirect: 'follow' });
  return {
    body: await response.text(),
    contentType: response.headers.get('content-type') ?? '',
    finalUrl: response.url,
    status: response.status,
  };
}

function sitemapUrls(xml) {
  return [...xml.matchAll(/<url>\s*([\s\S]*?)<\/url>/gi)]
    .map((match) => firstMatch(match[1], /<loc>([\s\S]*?)<\/loc>/i))
    .filter(Boolean)
    .map(decodeXml);
}

async function discoverPages() {
  const indexUrl = new URL('/sitemap-index.xml', base);
  const index = await fetchText(indexUrl);
  if (index.status >= 400) throw new Error(`Sitemap index ${index.status}: ${indexUrl}`);

  const childSitemaps = allMatches(index.body, /<sitemap>[\s\S]*?<loc>([\s\S]*?)<\/loc>[\s\S]*?<\/sitemap>/gi)
    .map(decodeXml)
    .map(remapToBase);
  if (!childSitemaps.length) return sitemapUrls(index.body).map(remapToBase);

  const pages = new Set();
  for (const child of childSitemaps) {
    if (child.includes('media-sitemap.xml')) continue;
    const sitemap = await fetchText(child);
    if (sitemap.status >= 400) throw new Error(`Sitemap ${sitemap.status}: ${child}`);
    sitemapUrls(sitemap.body).map(remapToBase).forEach((url) => pages.add(url));
  }
  return [...pages];
}

function resolveInternal(value, pageUrl) {
  if (!value || /^(data:|mailto:|tel:|javascript:|#)/i.test(value)) return null;
  try {
    const url = new URL(value, pageUrl);
    return url.origin === base.origin ? url.href.split('#')[0] : null;
  } catch {
    return null;
  }
}

async function inspectPage(url) {
  const response = await fetchText(url);
  const html = response.body;
  const title = stripTags(firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i));
  const description = firstMatch(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i)
    || firstMatch(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i);
  const canonical = firstMatch(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i)
    || firstMatch(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const robots = firstMatch(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["'][^>]*>/i);
  const images = allMatches(html, /<(?:img|source|video)\b[^>]+(?:src|poster)=["']([^"']+)["']/gi)
    .map((value) => resolveInternal(value, response.finalUrl)).filter(Boolean);
  const links = allMatches(html, /<a\b[^>]+href=["']([^"']+)["']/gi)
    .map((value) => resolveInternal(value, response.finalUrl)).filter(Boolean);
  const imageTags = [...html.matchAll(/<img\b([^>]*)>/gi)].map((match) => match[1]);
  const missingAlt = imageTags.filter((tag) => !/\balt=["'][^"']*["']/i.test(tag)).length;
  const issues = [];
  if (response.status !== 200) issues.push(`HTTP ${response.status}`);
  if (!title) issues.push('title manquant');
  if (!description) issues.push('description manquante');
  if (h1Count !== 1) issues.push(`${h1Count} H1`);
  if (!canonical) issues.push('canonical manquant');
  if (missingAlt) issues.push(`${missingAlt} image(s) sans alt`);

  return { url, finalUrl: response.finalUrl, status: response.status, title, description, canonical, h1Count, robots, images, links, issues };
}

async function checkUrl(url) {
  try {
    let response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (response.status === 405) response = await fetch(url, { redirect: 'follow' });
    return { url, status: response.status, finalUrl: response.url, ok: response.ok };
  } catch (error) {
    return { url, status: 0, finalUrl: '', ok: false, error: error.message };
  }
}

const pageUrls = await discoverPages();
const pages = await Promise.all(pageUrls.map(inspectPage));
const mediaUrls = [...new Set(pages.flatMap((page) => page.images))];
const linkedUrls = [...new Set(pages.flatMap((page) => page.links))];
const [media, internalLinks] = await Promise.all([
  Promise.all(mediaUrls.map(checkUrl)),
  Promise.all(linkedUrls.map(checkUrl)),
]);

const duplicateGroups = (field) => Object.entries(pages.reduce((groups, page) => {
  const value = page[field];
  if (value) (groups[value] ??= []).push(page.url);
  return groups;
}, {})).filter(([, urls]) => urls.length > 1).map(([value, urls]) => ({ value, urls }));

const report = {
  auditedAt: new Date().toISOString(),
  baseUrl: base.href,
  summary: {
    pageCount: pages.length,
    pageIssueCount: pages.filter((page) => page.issues.length).length,
    brokenMediaCount: media.filter((item) => !item.ok).length,
    brokenInternalLinkCount: internalLinks.filter((item) => !item.ok).length,
  },
  duplicateTitles: duplicateGroups('title'),
  duplicateDescriptions: duplicateGroups('description'),
  pages,
  brokenMedia: media.filter((item) => !item.ok),
  brokenInternalLinks: internalLinks.filter((item) => !item.ok),
};

const json = `${JSON.stringify(report, null, 2)}\n`;
if (outputPath) await writeFile(outputPath, json, 'utf8');
process.stdout.write(json);
if (report.summary.pageIssueCount || report.summary.brokenMediaCount || report.summary.brokenInternalLinkCount) process.exitCode = 1;
