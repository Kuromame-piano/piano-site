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

  integrations: [
    sitemap({
      // エリアページの優先度を上げる
      serialize(item) {
        if (item.url.includes('/area/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (item.url.endsWith('/area')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url === 'https://playon-music.jp/' || item.url === 'https://playon-music.jp') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ]
});