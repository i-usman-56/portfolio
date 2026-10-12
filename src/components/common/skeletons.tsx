import { Container } from "@/components/common/container";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Generic card-grid placeholder. Used as the fallback for lazy-loaded sections.
 *
 * @param props.cards - Number of placeholder cards to render (default 3).
 */
export function SectionSkeleton({ cards = 3 }: { cards?: number }) {
  return (
    <div role="status" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <span className="sr-only">Loading…</span>
      {Array.from({ length: cards }, (_, index) => (
        <div key={index} className="space-y-3 rounded-xl p-4 ring-1 ring-foreground/10">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  );
}

/**
 * Full-page placeholder shown by `loading.tsx` files while a route segment streams in.
 */
export function PageSkeleton() {
  return (
    <Container className="space-y-10 py-16">
      <div className="max-w-2xl space-y-4">
        <Skeleton className="h-6 w-28 rounded-full" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-4/5" />
      </div>
      <SectionSkeleton />
    </Container>
  );
}
