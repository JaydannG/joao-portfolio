import Image from "next/image";
import type { ProjectSection } from "@/types/project";
import Container from "@/components/layout/Container";
import ImageGallery from "@/components/media/ImageGallery";
import VimeoEmbed from "@/components/media/VimeoEmbed";

type ProjectSectionRendererProps = {
  section: ProjectSection;
};

export default function ProjectSectionRenderer({ section }: ProjectSectionRendererProps) {
  switch (section.type) {
    case "heading": {
      const HeadingTag = section.level === 3 ? "h3" : "h2";
      return (
        <Container>
          <HeadingTag className="max-w-(--container-prose) text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {section.text}
          </HeadingTag>
        </Container>
      );
    }

    case "paragraph":
      return (
        <Container>
          <p className="max-w-(--container-prose) text-base leading-relaxed text-foreground-muted">
            {section.text}
          </p>
        </Container>
      );

    case "image":
      if (section.fullWidth) {
        return (
          <figure className="flex flex-col gap-2">
            <div className="relative aspect-video w-full overflow-hidden bg-background-elevated">
              <Image
                src={section.src}
                alt={section.alt}
                fill
                sizes="100vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            {section.caption && (
              <Container>
                <figcaption className="text-sm text-foreground-muted">{section.caption}</figcaption>
              </Container>
            )}
          </figure>
        );
      }
      return (
        <Container>
          <figure className="flex max-w-(--container-prose) flex-col gap-2">
            <div className="relative aspect-video w-full overflow-hidden bg-background-elevated">
              <Image
                src={section.src}
                alt={section.alt}
                fill
                sizes="(min-width: 1024px) 42rem, 100vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            {section.caption && (
              <figcaption className="text-sm text-foreground-muted">{section.caption}</figcaption>
            )}
          </figure>
        </Container>
      );

    case "gallery":
      return (
        <Container>
          <ImageGallery images={section.images} />
        </Container>
      );

    case "video":
      return (
        <Container>
          <figure className="flex max-w-(--container-prose) flex-col gap-2 lg:max-w-none">
            <VimeoEmbed vimeoUrl={section.vimeoUrl} title={section.title} />
            {section.caption && (
              <figcaption className="text-sm text-foreground-muted">{section.caption}</figcaption>
            )}
          </figure>
        </Container>
      );

    case "quote":
      return (
        <Container>
          <blockquote className="max-w-(--container-prose) border-l-2 border-accent pl-6 text-xl text-foreground italic">
            <p>{section.text}</p>
            {section.attribution && (
              <footer className="mt-3 text-sm not-italic text-foreground-muted">
                &mdash; {section.attribution}
              </footer>
            )}
          </blockquote>
        </Container>
      );

    default: {
      const exhaustiveCheck: never = section;
      return exhaustiveCheck;
    }
  }
}
