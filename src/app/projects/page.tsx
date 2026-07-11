import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Joao Sieber Bittencourt",
  description: "A selection of VFX and compositing work by Joao Sieber Bittencourt.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Projects
          </h1>
          <p className="max-w-(--container-prose) text-lg text-foreground-muted">
            A selection of VFX and compositing work, spanning film, television, and commercial
            projects.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
