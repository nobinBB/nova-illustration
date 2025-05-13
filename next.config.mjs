const repo = 'nova-illustration';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,//Nマーク非表示
  output: 'export',                   // 静的 HTML 書き出し
  basePath: `/${repo}`,               // ルートを /repo に合わせる
  assetPrefix: `/${repo}/`,           // JS/CSS などのプレフィックス
  images: { unoptimized: true },      // next/image をそのまま <img> で出力
  trailingSlash: true,   
};


export default nextConfig;
