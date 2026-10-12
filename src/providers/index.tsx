import type { ReactNode } from "react";

import { ThemeProvider } from "@/providers/theme-provider";

/**
 * Composes every app-wide provider in one place so the root layout stays clean.
 * Add new providers (query client, toasts, auth…) here.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
