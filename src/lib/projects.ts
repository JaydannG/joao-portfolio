import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  const previousIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  return {
    previous: projects.length > 1 ? projects[previousIndex] : null,
    next: projects.length > 1 ? projects[nextIndex] : null,
  };
}

/**
 * Extracts a Vimeo embed URL from a standard Vimeo watch URL, e.g.
 * "https://vimeo.com/76979871" -> "https://player.vimeo.com/video/76979871".
 * Falls back to returning the input unchanged if no numeric ID is found.
 */
export function getVimeoEmbedSrc(vimeoUrl: string): string {
  const match = vimeoUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (!match) {
    return vimeoUrl;
  }
  return `https://player.vimeo.com/video/${match[1]}`;
}
