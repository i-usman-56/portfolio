import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Wrapping row of small neutral tags, used for tech stacks and skills.
 *
 * @example
 * <TagList items={["Node.js", "TypeScript"]} />
 */
export function TagList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item}>
          {/* Long tags (e.g. "AWS (Lambda, …)") wrap instead of overflowing on phones. */}
          <Badge variant="secondary" className="h-auto font-normal whitespace-normal">
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
