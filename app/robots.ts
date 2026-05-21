import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "FacebookExternalHit",
  "Twitterbot",
  "LinkedInBot",
];

// Note: do NOT disallow /_next/ — Googlebot needs to fetch /_next/static/
// (JS, CSS, fonts) and /_next/image (optimized images) to render and index
// the site correctly. Only block routes with no rendering value.
const DISALLOW = ["/*-variants/", "/api/", "/_api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/*-variants/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
