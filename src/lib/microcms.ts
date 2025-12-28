import { createClient } from "microcms-js-sdk";

// ビルド環境（Cloudflare）の変数を優先的に取得
const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN || process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY || process.env.MICROCMS_API_KEY;

export const client = createClient({
  serviceDomain: serviceDomain || '',
  apiKey: apiKey || '',
});