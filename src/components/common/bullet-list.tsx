import { cn } from "@/lib/utils";

/**
 * List of achievement-style sentences with a small round bullet, as on a printed CV.
 * The bullet is centred on the first line (`lh` unit), whatever the text size.
 *
 * @example
 * <BulletList items={job.highlights} className="mt-4" />
 */
export function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2 leading-7 text-foreground/80", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 before:absolute before:top-[calc(0.5lh-2.5px)] before:left-1 before:size-[5px] before:rounded-full before:bg-muted-foreground/70"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
