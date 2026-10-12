import { PageSkeleton } from "@/components/common/skeletons";

/**
 * Instant loading state for the root segment (wrapped in `<Suspense>` by Next.js).
 * Copy this file into every new route folder.
 */
export default function Loading() {
  return <PageSkeleton />;
}
