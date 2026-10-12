import { Geist, Geist_Mono } from "next/font/google";

import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { rootMetadata, rootViewport } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { AppProviders } from "@/providers";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = rootMetadata;
export const viewport = rootViewport;

/**
 * Root layout: fonts, global providers and the app shell (header, main, footer).
 * `suppressHydrationWarning` is required because next-themes sets the `class` on `<html>`.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.lang}
      suppressHydrationWarning
      className={cn(geistSans.variable, geistMono.variable, "h-full antialiased")}
    >
      <body className="flex min-h-full flex-col">
        <AppProviders>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <ScrollReveal />
        </AppProviders>
      </body>
    </html>
  );
}
