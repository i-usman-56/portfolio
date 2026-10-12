import { ArrowUpRight } from "lucide-react";

import { BulletList } from "@/components/common/bullet-list";
import { TagList } from "@/components/common/tag-list";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/profile";

/**
 * One project: name (linked when `href` is set), tagline, role, highlights and tech stack.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border p-6 transition-colors hover:border-foreground/20">
      <header>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
              >
                {project.name}
                <ArrowUpRight className="size-3.5" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              project.name
            )}
          </h3>
          {project.status && <Badge variant="outline">{project.status}</Badge>}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {project.role}
        </p>
      </header>
      <BulletList items={project.highlights} className="mt-4 text-sm leading-6" />
      <TagList items={project.tech} className="mt-auto pt-6" />
    </article>
  );
}
