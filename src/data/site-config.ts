/**
 * Centralized site content. Everything marked "PLACEHOLDER" below is invented
 * filler and must be replaced with real information before launch — none of
 * it should be treated as factual biography, credits, or contact details.
 */

export const siteConfig = {
  name: "Joao Sieber Bittencourt",
  title: "VFX Artist & Compositor",
  tagline:
    "PLACEHOLDER — Crafting photoreal composites and visual effects for film, television, and commercials.",

  // PLACEHOLDER Vimeo demo reel. Replace with Joao's real reel URL/ID.
  demoReelUrl: "https://vimeo.com/76979871",
  demoReelTitle: "PLACEHOLDER — Joao Sieber Bittencourt VFX Demo Reel",

  resumePdfPath: "/resume/placeholder-resume.pdf",

  about: {
    portraitSrc: "/images/placeholders/placeholder-portrait.svg",
    portraitAlt:
      "PLACEHOLDER portrait — a professional photo of Joao has not been supplied yet.",
    bio: [
      "PLACEHOLDER BIO — This paragraph should be replaced with Joao's real professional biography: how he got into VFX, the kind of work he specializes in, and what drives his approach to compositing and visual effects.",
      "PLACEHOLDER BIO — A second paragraph can cover notable areas of focus, the industries he's worked in (film, TV, commercials, games), and what he's currently focused on.",
    ],
    specializations: [
      "PLACEHOLDER — Compositing",
      "PLACEHOLDER — Rotoscoping & Paint",
      "PLACEHOLDER — CG Integration",
      "PLACEHOLDER — Matte Painting",
    ],
    skills: [
      "PLACEHOLDER — Nuke",
      "PLACEHOLDER — After Effects",
      "PLACEHOLDER — Houdini",
      "PLACEHOLDER — DaVinci Resolve",
      "PLACEHOLDER — Silhouette",
    ],
    location: "PLACEHOLDER — City, Country",
  },

  contact: {
    // PLACEHOLDER — replace with a real, publication-approved contact address.
    email: "placeholder@example.com",
  },

  socialLinks: [
    { label: "Vimeo", href: "https://vimeo.com/PLACEHOLDER" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/PLACEHOLDER" },
    { label: "IMDb", href: "https://www.imdb.com/name/PLACEHOLDER" },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
    { label: "About Me", href: "/about" },
  ],
} as const;
