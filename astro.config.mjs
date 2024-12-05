import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import astrowind from './vendor/integration';
import icon from "astro-icon";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind(),
    astrowind(),
    react(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': ['*'],
      },
    })
  ]
});
