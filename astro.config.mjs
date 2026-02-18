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

  redirects: {
    '/area/harumi-kachidoki': '/area/tsukishima',
    '/area/nihonbashi': '/area/ningyocho',
    '/area/morishita-sumiyoshi': '/area/morishita',
  },

  integrations: [
    sitemap({
      serialize(item) {
        // トップページ
        if (item.url === 'https://playon-music.jp/' || item.url === 'https://playon-music.jp') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // エリア一覧ページ（/area で終わる or /area/ で終わる）
        else if (item.url.match(/\/area\/?$/)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // 個別エリアページ
        else if (item.url.includes('/area/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ]
});
