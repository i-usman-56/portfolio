import { BulletList } from "@/components/common/bullet-list";
import { Section } from "@/components/common/section";
import type { Experience } from "@/types/profile";

/**
 * Work history, most recent first: dates in a narrow left column, details on the right.
 */
export function ExperienceSection({ items }: { items: Experience[] }) {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y">
        {items.map((job) => (
          <li
            key={`${job.company}-${job.start}`}
            className="grid reveal gap-2 py-8 first:pt-0 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-10"
          >
            <p className="text-sm text-muted-foreground tabular-nums md:pt-0.5">
              {job.start} – {job.end}
            </p>
            <div>
              <h3 className="font-semibold">
                {job.role}
                <span className="font-normal text-muted-foreground"> · {job.company}</span>
              </h3>
              {job.location && <p className="text-sm text-muted-foreground">{job.location}</p>}
              {job.summary && <p className="mt-2 leading-7 text-foreground/80">{job.summary}</p>}
              {job.highlights && job.highlights.length > 0 && (
                <BulletList items={job.highlights} className="mt-4" />
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
