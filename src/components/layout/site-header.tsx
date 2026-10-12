import Link from "next/link";

import { Container } from "@/components/common/container";
import { NavLink } from "@/components/common/nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/config/site";

/**
 * Sticky top bar: name, section navigation (inline from `md`, menu below) and theme toggle.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link href="/" className="font-heading font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="hidden items-center gap-6 text-sm md:mr-3 md:flex">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                className="text-muted-foreground transition-colors hover:text-foreground"
              />
            ))}
          </nav>
          <MobileNav items={siteConfig.nav} title={siteConfig.name} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
