import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col gap-4">
      <div className="relative aspect-video w-full overflow-hidden bg-background-elevated">
        <Image
          src={project.thumbnailImage}
          alt={project.altText}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2">
        {project.role && (
          <p className="text-xs font-medium tracking-widest text-accent uppercase">{project.role}</p>
        )}
        <h3 className="text-lg font-semibold text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-sm text-foreground-muted">{project.shortDescription}</p>
      </div>
    </article>
  );
}
