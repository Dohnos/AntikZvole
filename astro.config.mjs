// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
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
  // Jediný font webu: Inter (variabilní, self-hosted, zmenšený jen na latinku + češtinu)
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/inter-latin.woff2'],
            weight: '100 900',
            style: 'normal',
            display: 'swap',
            unicodeRange: ['U+0020-007E', 'U+00A0-00FF', 'U+2013-2026', 'U+2032-2033', 'U+20AC', 'U+2122', 'U+2212'],
          },
          {
            src: ['./src/assets/fonts/inter-cs.woff2'],
            weight: '100 900',
            style: 'normal',
            display: 'swap',
            unicodeRange: ['U+010C-010F', 'U+011A-011B', 'U+0139-013E', 'U+0147-0148', 'U+0154-0155', 'U+0158-0161', 'U+0164-0165', 'U+016E-016F', 'U+017D-017E'],
          },
        ],
      },
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dekujeme/'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
