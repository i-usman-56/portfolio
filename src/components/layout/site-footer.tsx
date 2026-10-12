import { Container } from "@/components/common/container";
import { SocialLinks } from "@/components/common/social-links";
import { siteConfig } from "@/config/site";

/**
 * Site footer: name, role and profile links.
 */
export function SiteFooter() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {siteConfig.name} · {siteConfig.role}
        </p>
        <SocialLinks links={siteConfig.social} />
      </Container>
    </footer>
  );
}
