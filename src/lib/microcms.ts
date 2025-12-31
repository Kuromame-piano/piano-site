// src/lib/microcms.ts
import { createClient, type MicroCMSQueries, type MicroCMSDate, type MicroCMSImage } from "microcms-js-sdk";

// 環境変数から取得
// ローカル開発環境(.env)では import.meta.env が、
// Cloudflare本番環境では process.env が使われるように両方をチェックします
const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN || process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY || process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error("MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY are required");
}

export const client = createClient({
  serviceDomain,
  apiKey,
});

// ブログの型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};