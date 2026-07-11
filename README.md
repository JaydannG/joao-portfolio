# Joao Portfolio

A modern, responsive portfolio website for VFX artist **Joao Sieber Bittencourt**.

The site is designed to showcase Joao’s demo reel, selected projects, professional background, resume, and contact information in a clean, cinematic presentation.

## Features

- Responsive layout for desktop, tablet, and mobile
- Dark, cinematic visual design
- Featured Vimeo demo reel
- Project gallery with reusable project cards
- Dynamic individual project pages
- Long-form project case studies with text, images, galleries, and video embeds
- About page with biography, skills, and contact information
- Resume page with PDF download and external viewing options
- Accessible navigation and keyboard focus states
- Reusable, maintainable component structure

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Pages

### Home

Introduces Joao and highlights his demo reel and featured work.

### Projects

Displays all portfolio projects in a responsive card grid.

### Project Detail

Each project has its own case-study page containing project information, images, written breakdowns, and embedded media.

### About

Includes Joao’s biography, professional background, skills, software experience, and contact information.

### Resume

Provides access to Joao’s resume as a downloadable PDF.

## Project Structure

The exact structure may evolve, but the main application is organized around reusable pages, components, and centralized content data.

```text
app/
├── about/
├── projects/
│   └── [slug]/
├── resume/
├── layout.tsx
└── page.tsx

components/
├── Navbar.tsx
├── Footer.tsx
├── ProjectCard.tsx
├── ProjectGrid.tsx
├── VimeoEmbed.tsx
└── ...

data/
└── projects.ts

public/
├── images/
└── resume/

Project content is stored in a centralized data structure so new projects can be added without creating a completely new page layout.

## Getting Started

### Prerequisites

Install a recent version of Node.js and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/USERNAME/REPOSITORY-NAME.git
cd REPOSITORY-NAME
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the site in your browser at:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs the project linter.

## Adding a Project

Projects are managed through the centralized project data file.

A project can include fields such as:

```ts
type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  thumbnailImage: string;
  altText: string;
  featured: boolean;
  role?: string;
  year?: string;
  tools?: string[];
  vimeoUrl?: string;
  sections: ProjectSection[];
};
```

To add a new project:

1. Add the project images to the appropriate folder inside `public`.
2. Add a new project object to the project data file.
3. Assign it a unique `slug`.
4. Add the desired text, images, galleries, and video sections.
5. Confirm that the project appears on the Projects page and opens at `/projects/[slug]`.

## Updating Content

Before publishing, replace all placeholder content, including:

- Demo reel Vimeo URL
- Project titles and descriptions
- Project images
- Project credits
- Biography text
- Contact information
- Social profile links
- Resume PDF
- Portrait image

Do not publish placeholder contact details or fictional professional credits.

## Deployment

The site can be deployed easily with Vercel.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Confirm the framework is detected as Next.js.
4. Deploy the project.
5. Connect a custom domain if needed.

Future pushes to the production branch can automatically trigger new deployments.

## Design Goals

The design is intentionally restrained so Joao’s work remains the main focus.

The visual direction emphasizes:

- Large project imagery
- High-contrast typography
- Generous spacing
- Minimal interface decoration
- Subtle motion and hover effects
- Strong readability
- Responsive media presentation

## Accessibility

The site aims to include:

- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Meaningful image alt text
- Sufficient color contrast
- Responsive layouts
- Non-autoplaying media with sound

## Status

This project is currently under development.

Some content and media may still use placeholders until final portfolio assets are supplied.

## License

This project and its visual assets are intended for Joao Sieber Bittencourt’s personal portfolio.

Unless otherwise stated, the source code and portfolio content may not be reused, redistributed, or republished without permission.