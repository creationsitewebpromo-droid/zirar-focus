import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The custom domain is the canonical fallback; Netlify can override it explicitly.
const site = process.env.PUBLIC_SITE_URL || 'https://zirar-focus.fr';

export default defineConfig({
  site,
  integrations: [sitemap({ filter: (page) => !/\/(merci|confidentialite)\/$/.test(page) })],
  build: { format: 'directory', inlineStylesheets: 'always' },
});
