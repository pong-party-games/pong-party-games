import { baseUrl } from "lib/utils";
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/search/frontpage"],
      },
      // AI Crawlers - Explicitly allow for GEO visibility
      {
        userAgent: ["GPTBot", "ChatGPT-User"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["Google-Extended"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["PerplexityBot"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["anthropic-ai", "Claude-Web", "ClaudeBot"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["CCBot"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["Omgilibot", "FacebookBot"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
