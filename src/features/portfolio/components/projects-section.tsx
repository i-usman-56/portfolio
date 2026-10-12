import { Section } from "@/components/common/section";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import type { Project } from "@/types/profile";

/** Props for {@link ProjectsSection}. */
export type ProjectsSectionProps = {
  projects: Project[];
  /** Smaller projects listed by name below the cards. */
  otherProjects?: string[];
};

/**
 * Selected projects as a two-column card grid, followed by an optional list of other work.
 */
export function ProjectsSection({ projects, otherProjects }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Selected projects">
      <ul className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name} className="reveal lg:even:[--reveal-delay:120ms]">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      {otherProjects && otherProjects.length > 0 && (
        <p className="mt-8 reveal text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Also worked on: </span>
          {otherProjects.join(", ")}.
        </p>
      )}
    </Section>
  );
}
