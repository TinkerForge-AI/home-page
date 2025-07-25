import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tinkerforge.ai',
  integrations: [
    react(),
    tailwind(),
    mdx(),
    sitemap(),
  ],
});