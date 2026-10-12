"use client";

import { useEffect } from "react";

import { ErrorFallback } from "@/components/common/error-fallback";
import type { RouteErrorProps } from "@/types";

/**
 * Route-level error boundary. Catches errors in this segment's pages and nested layouts
 * while keeping the root layout (header/footer) on screen.
 */
export default function RouteError({ error, retry }: RouteErrorProps) {
  useEffect(() => {
    // Swap for a reporting service (e.g. Sentry) when one is added.
    console.error(error);
  }, [error]);

  return <ErrorFallback error={error} onRetry={retry} />;
}
