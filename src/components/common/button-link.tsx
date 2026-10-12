import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Props for {@link ButtonLink}. */
export type ButtonLinkProps = ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & { href: string };

/**
 * A link styled as a button. Keeps real link semantics (`<Button render>` would add
 * `role="button"`) and merges classes, so variants like `outline` keep their border.
 * Internal paths use `next/link`; `mailto:`, `tel:`, external and download links use `<a>`.
 *
 * @example
 * <ButtonLink href="mailto:me@example.com">Email me</ButtonLink>
 * <ButtonLink href="/#experience" variant="outline">View experience</ButtonLink>
 */
export function ButtonLink({ href, variant, size, className, ...props }: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href.startsWith("/") && !props.download) {
    return <Link href={href} className={classes} {...props} />;
  }
  return <a href={href} className={classes} {...props} />;
}
