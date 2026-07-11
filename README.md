# Joao Portfolio

VFX portfolio website for Joao Sieber Bittencourt, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build (also statically generates every `/projects/[slug]` page)
- `npm run lint` — run ESLint
- `npm run typecheck` — run `tsc --noEmit`

## Project Structure

- `src/app/` — routes (`/`, `/projects`, `/projects/[slug]`, `/resume`, `/about`)
- `src/components/` — reusable UI components, grouped by area (`layout/`, `home/`, `projects/`, `media/`, `resume/`, `contact/`)
- `src/data/` — centralized site content: `projects.ts` (project case studies) and `site-config.ts` (name, bio, contact, nav)
- `src/types/project.ts` — `Project` and `ProjectSection` types
- `src/lib/projects.ts` — query helpers over the project data
- `public/images/placeholders/`, `public/resume/` — placeholder imagery and resume PDF

## Adding a Project

Add a new entry to the `projects` array in `src/data/projects.ts`. No new page or component is needed — `/projects/[slug]` renders any project from that array.

## Content Status

Most content is currently placeholder data (clearly labeled `PLACEHOLDER` throughout `src/data/`). See the project summary for the full list of what still needs real content before launch.
