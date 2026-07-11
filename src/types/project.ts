export type ProjectSectionBase = {
  /** Stable key for React lists; unique within a single project's sections. */
  id: string;
};

export type HeadingSection = ProjectSectionBase & {
  type: "heading";
  text: string;
  /** Defaults to 2 (h2) when omitted. */
  level?: 2 | 3;
};

export type ParagraphSection = ProjectSectionBase & {
  type: "paragraph";
  text: string;
};

export type ImageSection = ProjectSectionBase & {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  /** When true, the image bleeds to the full viewport width instead of the prose column. */
  fullWidth?: boolean;
};

export type GallerySection = ProjectSectionBase & {
  type: "gallery";
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export type VideoSection = ProjectSectionBase & {
  type: "video";
  vimeoUrl: string;
  /** Used as the iframe's accessible title. */
  title: string;
  caption?: string;
};

export type QuoteSection = ProjectSectionBase & {
  type: "quote";
  text: string;
  attribution?: string;
};

export type ProjectSection =
  | HeadingSection
  | ParagraphSection
  | ImageSection
  | GallerySection
  | VideoSection
  | QuoteSection;

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  thumbnailImage: string;
  /** Alt text shared by the hero and thumbnail images. */
  altText: string;
  featured: boolean;
  role?: string;
  year?: string;
  tools?: string[];
  /** Optional top-level project video, e.g. a breakdown reel. */
  vimeoUrl?: string;
  sections: ProjectSection[];
};
