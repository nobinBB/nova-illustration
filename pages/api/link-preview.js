// import { extract } from "@extractus/oembed-extractor";
// import { getLinkPreview } from "link-preview-js";
// import NodeCache from "node-cache";
// import { isIP } from "node:net";

// const cache = new NodeCache({ stdTTL: 60 * 60 });          // 1h キャッシュ

// export default async function handler(req, res) {
//   const { url } = req.query;
//   if (!url) return res.status(400).json({ error: "url param required" });

//   // ------- SSRF 簡易ガード（ローカル IP などを拒否） -------
//   try {
//     const host = new URL(url).hostname;
//     if (
//       isIP(host) &&
//       /^(0\.|10\.|127\.|169\.254|172\.(1[6-9]|2\d|3[01])|192\.168)/.test(host)
//     ) {
//       return res.status(400).json({ error: "private address blocked" });
//     }
//   } catch {
//     return res.status(400).json({ error: "invalid url" });
//   }

//   // ------- キャッシュ命中時 -------
//   if (cache.has(url)) return res.json(cache.get(url));

//   try {
//     // ① oEmbed があれば優先
//     const oembed = await extract(url).catch(() => null);

//     let meta;
//     if (oembed) {
//       meta = {
//         title:       oembed.title,
//         description: oembed.description,
//         thumbnail:   oembed.thumbnail_url,
//         html:        oembed.html,   // 必要なら iframe 埋め込みに利用可
//         url
//       };
//     } else {
//       // ② Fallback: OGP / Twitter Card スクレイピング
//       const og = await getLinkPreview(url);
//       meta = {
//         title:       og.title,
//         description: og.description,
//         thumbnail:   og.images?.[0],
//         url:         og.url
//       };
//     }

//     cache.set(url, meta);
//     res.json(meta);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "preview failed" });
//   }
// }
