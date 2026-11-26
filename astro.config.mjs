// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.antikzvole.cz',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    // Veškeré CSS přímo do HTML = žádný render-blocking request
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dekujeme/'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
