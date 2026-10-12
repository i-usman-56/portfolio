import type { Experience, Profile } from "@/types/profile";

/** `tel:` link for a phone number in any common format, e.g. "+44 20 7946 0000" → "tel:+442079460000". */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** WhatsApp chat link (wa.me expects digits only, no "+" or spaces). */
export function toWhatsAppHref(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

/** The role marked as ongoing (`end: "Present"`), if any. */
export function getCurrentRole(experience: Experience[]): Experience | undefined {
  return experience.find((job) => job.end.toLowerCase() === "present");
}

/**
 * schema.org `Person` for the portfolio owner, so search engines can show a rich profile.
 *
 * @param url - Canonical site URL.
 */
export function personJsonLd(profile: Profile, url: string): Record<string, unknown> {
  const current = getCurrentRole(profile.experience);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    sameAs: profile.links.map((link) => link.href),
    knowsAbout: profile.skills.flatMap((group) => group.items),
    ...(current && { worksFor: { "@type": "Organization", name: current.company } }),
  };
}
