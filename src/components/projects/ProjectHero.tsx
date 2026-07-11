import Image from "next/image";
import type { Project } from "@/types/project";
import Container from "@/components/layout/Container";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  const meta = [
    project.role && { label: "Role", value: project.role },
    project.year && { label: "Year", value: project.year },
    project.tools?.length ? { label: "Tools", value: project.tools.join(", ") } : undefined,
  ].filter((item): item is { label: string; value: string } => Boolean(item));

  return (
    <div className="flex flex-col gap-8">
      <Container>
        <h1 className="max-w-(--container-prose) text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-(--container-prose) text-lg text-foreground-muted">
          {project.shortDescription}
        </p>

        {meta.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border-subtle pt-6">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>

      <div className="relative aspect-video w-full overflow-hidden bg-background-elevated">
        <Image
          src={project.heroImage}
          alt={project.altText}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
