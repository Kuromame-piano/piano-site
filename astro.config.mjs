// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://playon-music.jp',
  
  // ▼ 追加: 画像最適化の許可ドメイン設定
  image: {
    domains: ["images.unsplash.com"],
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});