import type { Project } from "@/types/project";

/**
 * PLACEHOLDER PROJECT DATA
 *
 * Every project below is a fictional sample used to exercise the layout —
 * titles, descriptions, roles, tools, and imagery are all invented filler,
 * not real production credits. Replace with Joao's actual project history
 * before launch. Adding a new project only requires adding an entry here;
 * no new page component is needed since /projects/[slug] renders any
 * project from this array.
 */

const heroImage = "/images/placeholders/placeholder-16x9.svg";
const inlineImage = "/images/placeholders/placeholder-3x2.svg";

export const projects: Project[] = [
  {
    slug: "nightfall-chase",
    title: "Nightfall Chase",
    shortDescription:
      "PLACEHOLDER — A rain-soaked rooftop chase sequence built from full-CG environment extensions and practical stunt plates.",
    heroImage,
    thumbnailImage: heroImage,
    altText:
      "Placeholder hero image for 'Nightfall Chase' — final composite still not yet delivered.",
    featured: true,
    role: "PLACEHOLDER — Lead Compositor",
    year: "2024",
    tools: ["Nuke", "Houdini", "DaVinci Resolve"],
    vimeoUrl: "https://vimeo.com/76979871",
    sections: [
      {
        id: "overview",
        type: "heading",
        text: "Overview",
      },
      {
        id: "overview-copy",
        type: "paragraph",
        text: "PLACEHOLDER — This sequence combined practical rooftop plates shot on a rain rig with a fully CG city extension. The brief called for a grounded, tactile feel despite the scale of the environment work, so a large part of the process focused on matching grain, lens breathing, and atmospheric depth across every shot.",
      },
      {
        id: "process-heading",
        type: "heading",
        text: "Process",
      },
      {
        id: "process-copy",
        type: "paragraph",
        text: "PLACEHOLDER — Roto and paint removed rigging and safety equipment from the practical plates before CG elements were integrated. Deep compositing techniques kept the rain and atmosphere responsive to the extended geometry without re-rendering full passes for every note.",
      },
      {
        id: "wide-still",
        type: "image",
        src: heroImage,
        alt: "Placeholder wide still from 'Nightfall Chase' showing the rooftop environment extension.",
        caption: "PLACEHOLDER — Final composite, wide establishing shot.",
        fullWidth: true,
      },
      {
        id: "breakdown-video",
        type: "video",
        vimeoUrl: "https://vimeo.com/76979871",
        title: "PLACEHOLDER — Nightfall Chase VFX breakdown",
        caption: "PLACEHOLDER — Before/after breakdown of the rooftop extension.",
      },
      {
        id: "pull-quote",
        type: "quote",
        text: "PLACEHOLDER — “The rain integration was the hardest part — it had to feel like it was hitting real geometry, not just sitting on top of the frame.”",
        attribution: "PLACEHOLDER — Joao Sieber Bittencourt",
      },
    ],
  },
  {
    slug: "glass-city",
    title: "Glass City",
    shortDescription:
      "PLACEHOLDER — A near-future skyline built entirely in CG for a title sequence, composited to match a warm anamorphic look.",
    heroImage,
    thumbnailImage: heroImage,
    altText:
      "Placeholder hero image for 'Glass City' — final composite still not yet delivered.",
    featured: true,
    role: "PLACEHOLDER — Compositor",
    year: "2023",
    tools: ["Nuke", "After Effects", "Silhouette"],
    sections: [
      {
        id: "summary",
        type: "paragraph",
        text: "PLACEHOLDER — A fully CG skyline built for a title sequence, designed to sell scale without leaning on obvious sci-fi tropes. Compositing focused on integrating the render passes into a warm, slightly imperfect anamorphic look established by the show's cinematography.",
      },
      {
        id: "gallery",
        type: "gallery",
        images: [
          {
            src: inlineImage,
            alt: "Placeholder still 1 from 'Glass City' — daytime skyline pass.",
            caption: "PLACEHOLDER — Daytime lighting pass.",
          },
          {
            src: inlineImage,
            alt: "Placeholder still 2 from 'Glass City' — dusk lighting pass.",
            caption: "PLACEHOLDER — Dusk lighting pass.",
          },
          {
            src: inlineImage,
            alt: "Placeholder still 3 from 'Glass City' — final graded frame.",
            caption: "PLACEHOLDER — Final graded frame.",
          },
        ],
      },
      {
        id: "closing",
        type: "paragraph",
        text: "PLACEHOLDER — Grain matching and lens artifacts (breathing, chromatic aberration at the frame edges) were reintroduced last, after the CG passes were fully graded, to keep the shot from reading as too clean.",
      },
    ],
  },
  {
    slug: "echoes-of-tomorrow",
    title: "Echoes of Tomorrow",
    shortDescription:
      "PLACEHOLDER — A commercial spot blending live-action product photography with CG particle and light effects.",
    heroImage,
    thumbnailImage: heroImage,
    altText:
      "Placeholder hero image for 'Echoes of Tomorrow' — final composite still not yet delivered.",
    featured: true,
    role: "PLACEHOLDER — VFX Artist",
    year: "2023",
    tools: ["Nuke", "Houdini", "Cinema 4D"],
    vimeoUrl: "https://vimeo.com/76979871",
    sections: [
      {
        id: "intro",
        type: "paragraph",
        text: "PLACEHOLDER — A 30-second commercial spot combining macro product photography with simulated particle and light effects, delivered across broadcast and social edits.",
      },
      {
        id: "video",
        type: "video",
        vimeoUrl: "https://vimeo.com/76979871",
        title: "PLACEHOLDER — Echoes of Tomorrow final spot",
      },
      {
        id: "inline-image",
        type: "image",
        src: inlineImage,
        alt: "Placeholder still from 'Echoes of Tomorrow' showing the particle simulation pass.",
        caption: "PLACEHOLDER — Particle simulation pass, mid-composite.",
      },
    ],
  },
  {
    slug: "deep-current",
    title: "Deep Current",
    shortDescription:
      "PLACEHOLDER — An underwater rescue sequence combining tank photography with CG water surface and caustics work.",
    heroImage,
    thumbnailImage: heroImage,
    altText:
      "Placeholder hero image for 'Deep Current' — final composite still not yet delivered.",
    featured: false,
    role: "PLACEHOLDER — Compositor",
    year: "2022",
    tools: ["Nuke", "Houdini"],
    sections: [
      {
        id: "heading",
        type: "heading",
        text: "Bringing the tank plates to life",
        level: 3,
      },
      {
        id: "copy",
        type: "paragraph",
        text: "PLACEHOLDER — Underwater tank photography was combined with simulated caustics and surface interaction to sell a much larger body of water than the physical set allowed. Color and visibility were pushed shot-to-shot to maintain a consistent sense of depth.",
      },
      {
        id: "full-width-still",
        type: "image",
        src: heroImage,
        alt: "Placeholder full-width still from 'Deep Current' showing the underwater rescue sequence.",
        fullWidth: true,
      },
    ],
  },
  {
    slug: "paper-moon-archive",
    title: "Paper Moon Archive",
    shortDescription:
      "PLACEHOLDER — Period-accurate set extensions and sky replacements for a 1920s-set drama.",
    heroImage,
    thumbnailImage: heroImage,
    altText:
      "Placeholder hero image for 'Paper Moon Archive' — final composite still not yet delivered.",
    featured: false,
    role: "PLACEHOLDER — Junior Compositor",
    year: "2021",
    tools: ["Nuke", "Silhouette"],
    sections: [
      {
        id: "paragraph-1",
        type: "paragraph",
        text: "PLACEHOLDER — Set extensions and sky replacements for a 1920s period drama, matching a muted, desaturated palette established by the production's color script.",
      },
      {
        id: "gallery",
        type: "gallery",
        images: [
          {
            src: inlineImage,
            alt: "Placeholder still 1 from 'Paper Moon Archive' — street set extension.",
            caption: "PLACEHOLDER — Street set extension.",
          },
          {
            src: inlineImage,
            alt: "Placeholder still 2 from 'Paper Moon Archive' — sky replacement comparison.",
            caption: "PLACEHOLDER — Sky replacement comparison.",
          },
        ],
      },
    ],
  },
  {
    slug: "static-signal",
    title: "Static Signal",
    shortDescription:
      "PLACEHOLDER — A music video built around glitch and analog-distortion effects layered over live performance footage.",
    heroImage,
    thumbnailImage: heroImage,
    altText:
      "Placeholder hero image for 'Static Signal' — final composite still not yet delivered.",
    featured: false,
    role: "PLACEHOLDER — VFX Artist",
    year: "2022",
    tools: ["After Effects", "Nuke"],
    vimeoUrl: "https://vimeo.com/76979871",
    sections: [
      {
        id: "paragraph",
        type: "paragraph",
        text: "PLACEHOLDER — A music video combining live performance footage with hand-tuned glitch, scanline, and analog-distortion passes, timed to the track's rhythm.",
      },
      {
        id: "quote",
        type: "quote",
        text: "PLACEHOLDER — “Every glitch was hand-timed to the beat rather than procedurally generated — it needed to feel performed, not automated.”",
        attribution: "PLACEHOLDER — Joao Sieber Bittencourt",
      },
      {
        id: "video",
        type: "video",
        vimeoUrl: "https://vimeo.com/76979871",
        title: "PLACEHOLDER — Static Signal final video",
      },
    ],
  },
];
