import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generates `/robots.txt`: allow all crawlers and point them at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}
