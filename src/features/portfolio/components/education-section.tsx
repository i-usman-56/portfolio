import type { ReactNode } from "react";

import { Section } from "@/components/common/section";
import type { Education } from "@/types/profile";

/** Props for {@link EducationSection}. */
export type EducationSectionProps = {
  education: Education[];
  certifications?: string[];
  languages?: string[];
};

/** Small labelled block used for each column of the section. */
function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="reveal">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/**
 * Education alongside certifications and spoken languages. Empty groups are hidden.
 */
export function EducationSection({ education, certifications, languages }: EducationSectionProps) {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Group title="Qualifications">
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.qualification}>
                <p className="font-medium">{item.qualification}</p>
                <p className="text-sm text-muted-foreground">
                  {[item.institution, item.location].filter(Boolean).join(", ")}
                  {item.period && ` · ${item.period}`}
                </p>
              </li>
            ))}
          </ul>
        </Group>
        <div className="space-y-10">
          {certifications && certifications.length > 0 && (
            <Group title="Certifications">
              <ul className="space-y-2 leading-7 text-foreground/80">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </Group>
          )}
          {languages && languages.length > 0 && (
            <Group title="Languages">
              <p className="leading-7 text-foreground/80">{languages.join(" · ")}</p>
            </Group>
          )}
        </div>
      </div>
    </Section>
  );
}
