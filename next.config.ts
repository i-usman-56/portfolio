import type { NextConfig } from "next";

// Only for `next build` (not dev or typegen): production URLs need the real domain.
if (process.argv.includes("build") && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "⚠ NEXT_PUBLIC_SITE_URL is not set: canonical, Open Graph, robots and sitemap URLs will point to localhost.",
  );
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
