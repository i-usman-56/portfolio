import type { Metadata } from "next";

import { ButtonLink } from "@/components/common/button-link";
import { Container } from "@/components/common/container";

export const metadata: Metadata = {
  title: "Page not found",
};

/**
 * 404 page for unknown URLs and `notFound()` calls. Next.js adds `noindex` automatically.
 */
export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="font-heading text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <ButtonLink href="/" variant="outline">
        Back to home
      </ButtonLink>
    </Container>
  );
}
