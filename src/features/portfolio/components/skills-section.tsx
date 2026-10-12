import { Section } from "@/components/common/section";
import { TagList } from "@/components/common/tag-list";
import type { SkillGroup } from "@/types/profile";

/**
 * Skills grouped by category: category on the left, tags on the right.
 */
export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y">
        {groups.map((group) => (
          <div
            key={group.category}
            className="grid reveal gap-3 py-5 first:pt-0 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-10"
          >
            <dt className="text-sm font-medium">{group.category}</dt>
            <dd className="min-w-0">
              <TagList items={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
