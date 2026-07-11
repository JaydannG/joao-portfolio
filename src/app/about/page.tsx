import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import ContactLinks from "@/components/contact/ContactLinks";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Me — Joao Sieber Bittencourt",
  description: "Background, skills, and contact information for Joao Sieber Bittencourt.",
};

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div className="relative aspect-3/4 w-full max-w-xs overflow-hidden bg-background-elevated lg:max-w-none">
            <Image
              src={about.portraitSrc}
              alt={about.portraitAlt}
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                About Me
              </h1>
              {about.location && (
                <p className="text-sm font-medium tracking-widest text-foreground-muted uppercase">
                  {about.location}
                </p>
              )}
            </div>

            <div className="flex max-w-(--container-prose) flex-col gap-4 text-base leading-relaxed text-foreground-muted">
              {about.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
                  Specializations
                </h2>
                <ul className="mt-3 flex flex-col gap-2 text-base text-foreground">
                  {about.specializations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
                  Software & Skills
                </h2>
                <ul className="mt-3 flex flex-col gap-2 text-base text-foreground">
                  {about.skills.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
                Contact
              </h2>
              <div className="mt-3">
                <ContactLinks />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
