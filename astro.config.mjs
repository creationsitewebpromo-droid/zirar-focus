import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Netlify exposes URL during production builds. The fallback is used for local previews.
const site = process.env.PUBLIC_SITE_URL || process.env.URL || 'https://zirar-focus.netlify.app';

export default defineConfig({
  site,
  integrations: [sitemap({ filter: (page) => !/\/(merci|confidentialite)\/$/.test(page) })],
  build: { format: 'directory' },
});
