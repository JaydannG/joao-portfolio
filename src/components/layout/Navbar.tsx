import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background">
      <Container className="relative flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-lg"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm tracking-wide uppercase">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu navLinks={siteConfig.navLinks} />
      </Container>
    </header>
  );
}
