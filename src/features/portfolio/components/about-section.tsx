import { Section } from "@/components/common/section";
import type { Profile } from "@/types/profile";

/**
 * About: summary paragraphs beside a short list of key facts.
 */
export function AboutSection({ about }: { about: Profile["about"] }) {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="max-w-2xl reveal space-y-5 leading-7 text-foreground/80">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="grid reveal gap-5 self-start rounded-xl border p-6 text-sm lg:[--reveal-delay:120ms]">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-muted-foreground">{fact.label}</dt>
              <dd className="mt-0.5 font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
