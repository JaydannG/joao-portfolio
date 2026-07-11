import Link from "next/link";
import Container from "@/components/layout/Container";
import DemoReel from "@/components/home/DemoReel";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { siteConfig } from "@/data/site-config";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">
              {siteConfig.title}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-(--container-prose) text-lg text-foreground-muted">
              {siteConfig.tagline}
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-accent px-5 py-2.5 text-sm font-medium tracking-wide text-accent uppercase transition-colors hover:bg-accent hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View All Projects
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-border-subtle px-5 py-2.5 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:border-foreground-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                About Me
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 border border-border-subtle px-5 py-2.5 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:border-foreground-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Resume
              </Link>
            </div>
          </div>

          <DemoReel vimeoUrl={siteConfig.demoReelUrl} title={siteConfig.demoReelTitle} />
        </Container>
      </section>

      {featuredProjects.length > 0 && (
        <section className="border-t border-border-subtle py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Featured Work
              </h2>
              <Link
                href="/projects"
                className="text-sm font-medium tracking-wide text-foreground-muted uppercase transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View All &rarr;
              </Link>
            </div>
            <ProjectGrid projects={featuredProjects} />
          </Container>
        </section>
      )}
    </>
  );
}
