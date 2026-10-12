import Link from "next/link";

import type { NavItem } from "@/types";

/**
 * Renders a {@link NavItem}: `next/link` for internal paths, and a new-tab `<a>`
 * with a safe `rel` for external URLs (`item.external`).
 */
export function NavLink({ item, className }: { item: NavItem; className?: string }) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {item.title}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {item.title}
    </Link>
  );
}
