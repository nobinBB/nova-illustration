// next.config.js
const repo   = "nova-illustration";              // ← リポジトリ名
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  /* GitHub Pages 用 */
  output: "export",        // HTML を書き出して “out/” に置く
  trailingSlash: true,     // /about/ にリダイレクトさせ 404 回避
  basePath:   isProd ? `/${repo}`   : "",   // dev では空
  assetPrefix: isProd ? `/${repo}/` : "",   // dev では空
  images: { unoptimized: true },   // next/image を最適化しない
};
