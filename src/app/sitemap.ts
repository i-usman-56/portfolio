import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/** Public routes. The portfolio is a single page; add new routes here as they are built. */
const routes = ["/"];

/**
 * Generates `/sitemap.xml` for every public route.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
