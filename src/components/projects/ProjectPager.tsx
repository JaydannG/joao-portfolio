import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectPagerProps = {
  previous: Project | null;
  next: Project | null;
};

export default function ProjectPager({ previous, next }: ProjectPagerProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Project navigation"
      className="grid grid-cols-1 gap-6 border-t border-border-subtle pt-8 sm:grid-cols-2"
    >
      <div>
        {previous && (
          <Link
            href={`/projects/${previous.slug}`}
            className="group flex flex-col gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
              Previous Project
            </span>
            <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
              {previous.title}
            </span>
          </Link>
        )}
      </div>

      <div className="sm:text-right">
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:items-end"
          >
            <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
              Next Project
            </span>
            <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
