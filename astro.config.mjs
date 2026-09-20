import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The custom domain is the canonical fallback; Netlify can override it explicitly.
const site = process.env.PUBLIC_SITE_URL || 'https://zirar-focus.fr';

export default defineConfig({
  site,
  integrations: [sitemap({
    filter: (page) => !/\/(merci|confidentialite)\/$/.test(page) && !page.endsWith('/media-sitemap.xml'),
    customSitemaps: [new URL('/media-sitemap.xml', site).toString()],
  })],
  build: { format: 'directory', inlineStylesheets: 'always' },
});
