"use client";

import { RotateCcw, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Props for {@link ErrorFallback}. */
export type ErrorFallbackProps = {
  /** The caught error. Server errors only expose `digest` in production. */
  error?: Error & { digest?: string };
  /** Re-render the failed boundary (pass Next's `retry`). Hides the button when omitted. */
  onRetry?: () => void;
  title?: string;
  description?: string;
  /** Smaller inline variant for component-level boundaries. */
  compact?: boolean;
};

/**
 * Shared error UI used by `error.tsx`, `global-error.tsx` and {@link SectionBoundary}.
 * Shows the error message in development only; production shows the digest for log lookup.
 */
export function ErrorFallback({
  error,
  onRetry,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
  compact = false,
}: ErrorFallbackProps) {
  const isDev = process.env.NODE_ENV === "development";
  const Heading = compact ? "h2" : "h1";

  return (
    <div
      role="alert"
      className={cn(
        "mx-auto flex w-full flex-col items-center gap-3 text-center",
        compact ? "rounded-xl p-6 ring-1 ring-destructive/30" : "max-w-md py-24",
      )}
    >
      <TriangleAlert className="size-8 text-destructive" aria-hidden />
      <Heading className="font-heading text-lg font-semibold">{title}</Heading>
      <p className="text-sm text-muted-foreground">{description}</p>
      {isDev && error?.message && (
        <pre className="max-w-full overflow-x-auto rounded-md bg-muted p-3 text-left text-xs">
          {error.message}
        </pre>
      )}
      {!isDev && error?.digest && (
        <p className="text-xs text-muted-foreground">Error ID: {error.digest}</p>
      )}
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          <RotateCcw data-icon="inline-start" />
          Try again
        </Button>
      )}
    </div>
  );
}
