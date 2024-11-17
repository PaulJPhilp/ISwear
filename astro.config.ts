import path from 'node:path';
import { fileURLToPath } from 'node:url';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
  ],

  site: 'https://paulphilp.com',
  base: '/',

  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
