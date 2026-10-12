"use client";

import { catchError, type ErrorInfo } from "next/error";

import { ErrorFallback } from "@/components/common/error-fallback";

/** Props accepted by {@link SectionBoundary} (besides `children`). */
export type SectionBoundaryProps = {
  /** Heading shown when the wrapped section crashes. */
  title?: string;
};

/**
 * Fallback rendered by {@link SectionBoundary}; receives Next's error info as 2nd argument.
 */
function SectionErrorFallback(
  { title = "This section failed to load" }: SectionBoundaryProps,
  { error, retry }: ErrorInfo,
) {
  return (
    <ErrorFallback
      compact
      title={title}
      description="The rest of the page still works."
      error={error instanceof Error ? error : undefined}
      onRetry={retry}
    />
  );
}

/**
 * Component-level error boundary (Next.js `catchError`). Wrap any section that may fail
 * so one crash doesn't take down the whole route.
 *
 * @example
 * <SectionBoundary title="Projects failed to load">
 *   <LazyProjects />
 * </SectionBoundary>
 */
export const SectionBoundary = catchError(SectionErrorFallback);
