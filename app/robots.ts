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
      // AI Crawlers - Allow indexing but no training
      {
        userAgent: ["GPTBot", "ChatGPT-User"],
        disallow: "/",
      },
      {
        userAgent: ["CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
      {
        userAgent: ["Google-Extended", "PerplexityBot"],
        disallow: "/",
      },
      {
        userAgent: ["Omgilibot", "FacebookBot"],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
