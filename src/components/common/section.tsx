import type { ReactNode } from "react";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

/** Props for {@link Section}. */
export type SectionProps = {
  /** Anchor id, also used to link the heading for screen readers. */
  id?: string;
  /** Section heading (rendered as `<h2>`). */
  title?: string;
  /** Short supporting text under the heading. */
  description?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Standard page section: top divider, consistent vertical rhythm, optional heading and
 * description. `scroll-mt` keeps anchor targets clear of the sticky header.
 */
export function Section({ id, title, description, className, children }: SectionProps) {
  const headingId = id && title ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-14 border-t py-16 sm:py-20", className)}
    >
      <Container>
        {(title || description) && (
          <header className="mb-10 max-w-2xl reveal space-y-2">
            {title && (
              <h2 id={headingId} className="font-heading text-2xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {description && <p className="text-muted-foreground">{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
