import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectPager from "@/components/projects/ProjectPager";
import ProjectSectionRenderer from "@/components/projects/ProjectSectionRenderer";
import { getAdjacentProjects, getAllProjects, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Joao Sieber Bittencourt`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article className="flex flex-col gap-16 pb-24">
      <ProjectHero project={project} />

      <div className="flex flex-col gap-12">
        {project.sections.map((section) => (
          <ProjectSectionRenderer key={section.id} section={section} />
        ))}
      </div>

      <Container className="flex flex-col gap-8">
        <ProjectPager previous={previous} next={next} />
        <Link
          href="/projects"
          className="text-sm font-medium tracking-wide text-foreground-muted uppercase transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          &larr; Back to All Projects
        </Link>
      </Container>
    </article>
  );
}
