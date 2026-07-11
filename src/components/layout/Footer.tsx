import { siteConfig } from "@/data/site-config";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-10">
      <Container className="flex flex-col items-center gap-4 text-sm text-foreground-muted sm:flex-row sm:justify-between">
        <p>
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Contact
          </a>
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
