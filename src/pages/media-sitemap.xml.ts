import type { APIRoute } from 'astro';
import { portfolio } from '../data/portfolio';

export const prerender = true;

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://zirar-focus.fr');
  const galleryUrl = new URL('/galerie/', base).toString();
  const imageEntries = portfolio.map((item) => `
    <image:image>
      <image:loc>${escapeXml(new URL(item.src, base).toString())}</image:loc>
      <image:title>${escapeXml(item.title)}</image:title>
      <image:caption>${escapeXml(item.alt)}</image:caption>
    </image:image>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${escapeXml(galleryUrl)}</loc>${imageEntries}
    <video:video>
      <video:thumbnail_loc>${escapeXml(new URL('/images/portfolio/film-concert.jpg', base).toString())}</video:thumbnail_loc>
      <video:title>L’énergie de la scène — Zirar Focus</video:title>
      <video:description>Extrait filmé par Zirar Focus lors d’un concert et présenté dans le portfolio du studio.</video:description>
      <video:content_loc>${escapeXml(new URL('/videos/zirar-focus-reel-720p.mp4', base).toString())}</video:content_loc>
      <video:duration>35</video:duration>
      <video:publication_date>2026-08-09</video:publication_date>
      <video:uploader info="${escapeXml(new URL('/', base).toString())}">Zirar Focus</video:uploader>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
