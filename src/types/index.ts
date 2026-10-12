/**
 * Shared, app-wide TypeScript types.
 * Feature-specific types stay inside their feature folder.
 */

/** A single navigation link rendered in the header or footer. */
export type NavItem = {
  /** Visible link text. */
  title: string;
  /** Internal path (`/about`) or absolute URL. */
  href: string;
  /** Opens in a new tab when true. */
  external?: boolean;
};

/** Input accepted by `buildMetadata` to generate per-page SEO tags. */
export type PageSeo = {
  /** Page title; combined with the site title template. */
  title: string;
  /** Use `title` as-is, skipping the `%s | Site` template (e.g. the home page). */
  absoluteTitle?: boolean;
  /** Meta description, ideally 50–160 characters. */
  description: string;
  /** Route path used for the canonical URL and `og:url`, e.g. `/about`. */
  path: string;
  /** Optional absolute or root-relative OG image; defaults to the route's `opengraph-image`. */
  image?: string;
  /** Adds `noindex, nofollow` when true (drafts, private pages). */
  noIndex?: boolean;
};

/** Props Next.js passes to every `error.tsx` / `global-error.tsx` boundary. */
export type RouteErrorProps = {
  error: Error & { digest?: string };
  /** Re-fetches and re-renders the failed segment (preferred). */
  retry: () => void;
  /** Clears the error state and re-renders without re-fetching. */
  reset: () => void;
};
