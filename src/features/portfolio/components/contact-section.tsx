import { Mail, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/common/brand-icons";
import { ButtonLink } from "@/components/common/button-link";
import { Section } from "@/components/common/section";
import { SocialLinks } from "@/components/common/social-links";
import { toTelHref, toWhatsAppHref } from "@/lib/profile";
import type { Profile } from "@/types/profile";

/**
 * Closing call to action: message, email, and Call / WhatsApp buttons when numbers are set.
 * Phone numbers are never displayed; the buttons dial or open a chat directly.
 */
export function ContactSection({ profile }: { profile: Profile }) {
  return (
    <Section id="contact" title={profile.contact.heading}>
      <div className="reveal rounded-xl border bg-muted/40 p-8 sm:p-10">
        <p className="max-w-xl leading-7 text-foreground/80">{profile.contact.message}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-5 inline-block text-xl font-semibold tracking-tight break-all underline-offset-4 hover:underline sm:text-2xl"
        >
          {profile.email}
        </a>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${profile.email}`} size="lg">
            <Mail data-icon="inline-start" aria-hidden />
            Send an email
          </ButtonLink>
          {profile.phone && (
            <ButtonLink href={toTelHref(profile.phone)} variant="outline" size="lg">
              <Phone data-icon="inline-start" aria-hidden />
              Call
            </ButtonLink>
          )}
          {profile.whatsapp && (
            <ButtonLink
              href={toWhatsAppHref(profile.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <WhatsAppIcon data-icon="inline-start" />
              WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </ButtonLink>
          )}
        </div>
        <SocialLinks links={profile.links} className="mt-8" />
      </div>
    </Section>
  );
}
