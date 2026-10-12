"use client";

import { useEffect } from "react";

import { ErrorFallback } from "@/components/common/error-fallback";
import type { RouteErrorProps } from "@/types";

import "./globals.css";

/**
 * Last-resort boundary for errors thrown by the root layout itself.
 * It replaces the whole document, so it renders its own `<html>`/`<body>`
 * and re-applies the saved theme (next-themes' script doesn't run here).
 */
export default function GlobalError({ error, retry }: RouteErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle(
        "dark",
        saved === "dark" || (saved === "system" && prefersDark),
      );
    } catch {
      // Storage blocked: keep the default light theme.
    }
  }, []);

  return (
    <html lang="en">
      <body className="flex min-h-svh items-center bg-background text-foreground antialiased">
        <title>Something went wrong</title>
        <ErrorFallback error={error} onRetry={retry} />
      </body>
    </html>
  );
}
