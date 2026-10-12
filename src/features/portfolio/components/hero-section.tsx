import { Download, Mail, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { Container } from "@/components/common/container";
import { SocialLinks } from "@/components/common/social-links";
import { getCurrentRole } from "@/lib/profile";
import type { Profile } from "@/types/profile";

/**
 * Above-the-fold introduction: name, role, location, intro and primary actions.
 * Fades in once on load (CSS only, skipped for reduced-motion users).
 */
export function HeroSection({ profile }: { profile: Profile }) {
  const current = getCurrentRole(profile.experience);

  return (
    <Container className="py-20 motion-safe:animate-in motion-safe:duration-700 motion-safe:fade-in motion-safe:slide-in-from-bottom-2 sm:py-28">
      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-3.5" aria-hidden />
        {profile.location}
      </p>
      <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
        {profile.role}
        {current && ` at ${current.company}`}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/80">{profile.intro}</p>

      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${profile.email}`} size="lg">
          <Mail data-icon="inline-start" aria-hidden />
          Get in touch
        </ButtonLink>
        {profile.resumeUrl ? (
          <ButtonLink href={profile.resumeUrl} download variant="outline" size="lg">
            <Download data-icon="inline-start" aria-hidden />
            Download CV
          </ButtonLink>
        ) : (
          <ButtonLink href="/#experience" variant="outline" size="lg">
            View experience
          </ButtonLink>
        )}
      </div>

      <SocialLinks links={profile.links} className="mt-8" />
    </Container>
  );
}
