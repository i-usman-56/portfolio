import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Centred, max-width page container with responsive side padding.
 * Use it as the outermost wrapper of every section so widths stay consistent.
 */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6", className)} {...props} />;
}
