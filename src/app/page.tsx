import { profile } from "@data";

import { JsonLd } from "@/components/common/json-ld";
import { siteConfig } from "@/config/site";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/features/portfolio";
import { personJsonLd } from "@/lib/profile";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: siteConfig.title,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

/**
 * Home route: the single-page portfolio. All content comes from `data.ts`.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd(profile, siteConfig.url)} />
      <HeroSection profile={profile} />
      <AboutSection about={profile.about} />
      <ExperienceSection items={profile.experience} />
      <ProjectsSection projects={profile.projects} otherProjects={profile.otherProjects} />
      <SkillsSection groups={profile.skills} />
      <EducationSection
        education={profile.education}
        certifications={profile.certifications}
        languages={profile.languages}
      />
      <ContactSection profile={profile} />
    </>
  );
}
