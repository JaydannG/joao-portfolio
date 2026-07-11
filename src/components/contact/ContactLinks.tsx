import { siteConfig } from "@/data/site-config";

export default function ContactLinks() {
  return (
    <ul className="flex flex-col gap-3 text-base">
      <li>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {siteConfig.contact.email}
        </a>
      </li>
      {siteConfig.socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
