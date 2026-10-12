import { profile } from "@data";

import type { NavItem } from "@/types";

/** In-page sections linked from the header. Each `href` matches a section `id` on the home page. */
const nav: NavItem[] = [
  { title: "About", href: "/#about" },
  { title: "Experience", href: "/#experience" },
  { title: "Projects", href: "/#projects" },
  { title: "Skills", href: "/#skills" },
  { title: "Contact", href: "/#contact" },
];

/**
 * Site-wide settings for SEO, navigation and the app shell, derived from `data.ts`.
 * Edit content in `data.ts`; only the deployment URL and theme colours live here.
 */
export const siteConfig = {
  name: profile.name,
  role: profile.role,
  title: profile.seo.title,
  description: profile.seo.description,
  /** Canonical origin without a trailing slash. Set `NEXT_PUBLIC_SITE_URL` in production. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, ""),
  locale: profile.seo.locale,
  /** BCP 47 language tag for `<html lang>`, e.g. `en-GB`. */
  lang: profile.seo.locale.replace("_", "-"),
  keywords: profile.seo.keywords,
  author: { name: profile.name, url: profile.links[0]?.href },
  themeColor: { light: "#ffffff", dark: "#0a0a0a" },
  nav,
  social: profile.links,
};
