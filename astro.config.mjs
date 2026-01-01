// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://playon-music.jp',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  // ▼ ここを追加：Unsplashの画像を最適化できるように許可
  image: {
    domains: ["images.unsplash.com"],
  },
});