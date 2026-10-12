"use client";

import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, type MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { NavItem } from "@/types";

/** Props for {@link MobileNav}. */
export type MobileNavProps = {
  items: NavItem[];
  /** Shown at the top of the sheet (the site name). */
  title: string;
};

/**
 * Small-screen navigation: a menu button that slides a sheet down from the top
 * (hidden from `md` up, where the inline nav shows). Links navigate only after the
 * sheet has finished closing, so the sheet's scroll lock can't cancel the jump.
 */
export function MobileNav({ items, title }: MobileNavProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const pendingHref = useRef<string | null>(null);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    pendingHref.current = href;
    setOpen(false);
  };

  const handleOpenChangeComplete = (isOpen: boolean) => {
    const href = pendingHref.current;
    if (isOpen || !href) return;
    pendingHref.current = null;
    router.push(href);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen} onOpenChangeComplete={handleOpenChangeComplete}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />}
      >
        <Menu aria-hidden />
      </SheetTrigger>
      <SheetContent side="top" className="gap-0 pb-3 md:hidden">
        <SheetTitle className="flex h-14 items-center px-4 font-semibold tracking-tight">
          {title}
        </SheetTitle>
        <nav aria-label="Main">
          <ul className="divide-y border-t">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleLinkClick(event, item.href)}
                  className="block px-4 py-3.5 text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
