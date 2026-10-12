import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import type { PageSeo } from "@/types";

/**
 * Site-wide default metadata, exported by the root layout.
 * Child routes override fields via {@link buildMetadata}. No canonical/`og:url` here:
 * metadata merges shallowly, so every route would inherit the home page's URL.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  // Indexing is the default; only add Google's large image previews. Setting
  // `index, follow` here would conflict with the `noindex` Next.js adds to 404 pages.
  robots: { googleBot: { "max-image-preview": "large" } },
  formatDetection: { telephone: false, email: false, address: false },
};

/** Viewport + browser theme colour for light and dark modes. */
export const rootViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor.dark },
  ],
  colorScheme: "light dark",
};

/**
 * Builds per-page metadata (title, description, canonical, Open Graph, Twitter).
 *
 * @example
 * export const metadata = buildMetadata({
 *   title: "About",
 *   description: "Who I am and what I do.",
 *   path: "/about",
 * });
 */
export function buildMetadata({
  title,
  absoluteTitle,
  description,
  path,
  image,
  noIndex,
}: PageSeo): Metadata {
  const images = image ? [{ url: image }] : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...rootMetadata.openGraph,
      title,
      description,
      url: path,
      ...(images && { images }),
    },
    twitter: {
      ...rootMetadata.twitter,
      title,
      description,
      ...(images && { images }),
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
