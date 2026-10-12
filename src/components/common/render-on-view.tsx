"use client";

import type { ReactNode } from "react";

import { useInView } from "@/hooks/use-in-view";

/** Props for {@link RenderOnView}. */
export type RenderOnViewProps = {
  /** Rendered only once the wrapper scrolls near the viewport. */
  children: ReactNode;
  /** Shown until then; reserve similar height to avoid layout shift. */
  fallback: ReactNode;
  /** How early to start loading, e.g. `"300px"` (default `"200px"`). */
  rootMargin?: string;
  className?: string;
};

/**
 * Defers rendering of below-the-fold content until it is about to be seen.
 * Combine with `next/dynamic` components so their JS chunk is only fetched on scroll.
 *
 * @example
 * <RenderOnView fallback={<SectionSkeleton />}>
 *   <LazyHighlights />
 * </RenderOnView>
 */
export function RenderOnView({ children, fallback, rootMargin, className }: RenderOnViewProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin });

  return (
    <div ref={ref} className={className}>
      {inView ? children : fallback}
    </div>
  );
}
