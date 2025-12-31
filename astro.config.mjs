// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yzk-piano-site.pages.dev', // ← ここを追加（自分のURL）
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});