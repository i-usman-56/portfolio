import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ProfileLink } from "@/types/profile";

/**
 * Inline list of external profile links (LinkedIn, GitHub…), each opening in a new tab.
 *
 * @example
 * <SocialLinks links={profile.links} />
 */
export function SocialLinks({ links, className }: { links: ProfileLink[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2 text-sm", className)}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
            <ArrowUpRight className="size-3.5" aria-hidden />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
