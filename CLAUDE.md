# Joao Portfolio

## Project Overview

Build a polished, responsive VFX portfolio website for **Joao Sieber Bittencourt**.

The website should primarily showcase Joao's VFX work, demo reel, professional experience, and contact information. The design should feel cinematic and visually focused without distracting from the project imagery and video content.

This is initially a portfolio website rather than a complex web application. Prefer simple, maintainable solutions and avoid unnecessary backend infrastructure.

## Tech Stack

Use:

* Next.js with the App Router
* TypeScript
* Tailwind CSS
* Responsive, reusable React components

Use the existing project setup and dependencies whenever possible. Do not add large libraries unless they provide a clear benefit.

## General Requirements

* The website must work well on desktop, tablet, and mobile.
* Use semantic HTML and accessible navigation.
* All images must include meaningful alt text.
* Interactive elements should have visible hover and keyboard-focus states.
* Keep components modular and reusable.
* Avoid hardcoding repeated project-page layouts.
* Use clean TypeScript types for project and site data.
* Keep animations subtle and performant.
* Do not overengineer the initial version.

## Site Navigation

Include a persistent top navigation bar with links to:

* Home
* Projects
* Resume
* About Me

The navigation should clearly indicate the current page.

On smaller screens, convert the navigation into an accessible mobile menu.

The site logo or Joao's name should link back to the home page.

## Routes

Use the following routes:

* `/` — Home
* `/projects` — All projects
* `/projects/[slug]` — Individual project pages
* `/resume` — Resume
* `/about` — About Me

## Home Page

The home page should introduce Joao and immediately highlight his strongest work.

Include:

* Joao Sieber Bittencourt's name
* A short professional title or introduction
* A prominent Vimeo demo reel embed or thumbnail that opens the demo reel
* A clear link to view all projects
* A small selection of featured projects
* Links to the About and Resume pages

The demo reel should be treated as the main visual focus of the page.

Use placeholder text and a placeholder Vimeo URL until final content is supplied.

## Projects Page

Display projects in a responsive card grid.

Each project card should include:

* Project title
* Featured image
* Short description
* Optional category or role
* Link to the individual project page

The full card should be clickable while remaining accessible.

Project cards should use consistent image dimensions and styling.

## Individual Project Pages

Each project should use a dynamic route based on its slug.

Individual project pages should support long-form, blog-style case studies containing:

* Project title
* Hero image
* Short project summary
* Joao's role
* Software or tools used
* Project date or release year
* Embedded video when applicable
* Multiple text sections
* Full-width and inline images
* Image captions
* Previous and next project navigation
* Link back to all projects

The layout should be flexible enough that each project can contain a different number of sections, images, and videos.

Keep paragraphs readable by limiting the maximum text width, while allowing project imagery to use more of the screen.

## Project Data

Store project metadata in a centralized, reusable data structure rather than duplicating it across components.

Each project should support fields similar to:

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

Project sections should support different content types, such as:

* Heading
* Paragraph
* Image
* Image gallery
* Video
* Quote or highlighted text

For the initial implementation, project data may be stored locally in TypeScript, JSON, or Markdown. Prefer the format that makes adding new projects straightforward.

Adding a project should not require creating an entirely new page component.

## About Me Page

Create a visually polished About Me page that includes:

* Portrait or professional image
* Personal biography
* Professional background
* Areas of specialization
* Software and technical skills
* Location, if provided
* Contact information
* Links to professional profiles such as Vimeo, LinkedIn, or IMDb when supplied

Use placeholder content where final information is unavailable. Clearly organize placeholder data so it can be replaced easily.

## Resume Page

Create a dedicated Resume page.

It should support:

* An embedded PDF resume
* A button to open or download the PDF
* A fallback message or link if the browser cannot display the embedded document

The resume viewer must remain usable on mobile devices.

Use a placeholder PDF path until the real resume is added.

## Visual Direction

Use a dark, cinematic visual style appropriate for a VFX artist.

Suggested direction:

* Dark neutral background
* High-contrast typography
* Large project imagery
* Generous spacing
* Minimal interface decoration
* Subtle transitions and hover effects
* Clean sans-serif typography
* Restrained use of accent colors

The design should feel premium and professional, but the work itself should remain the primary focus.

Avoid:

* Excessive gradients
* Heavy glassmorphism
* Distracting animations
* Small or low-contrast text
* Overly complicated card designs
* Generic corporate styling

## Images and Media

* Use responsive images and preserve their aspect ratios.
* Prevent layout shifts by defining image dimensions or aspect ratios.
* Lazy-load media that is below the fold.
* Do not autoplay videos with sound.
* Vimeo embeds must be responsive.
* Use placeholder assets when final project images are unavailable.
* Keep all asset references organized so they can be replaced easily.

## Reusable Components

Prefer reusable components such as:

* `Navbar`
* `MobileMenu`
* `Footer`
* `DemoReel`
* `ProjectCard`
* `ProjectGrid`
* `ProjectHero`
* `ProjectSectionRenderer`
* `ImageGallery`
* `VimeoEmbed`
* `ResumeViewer`
* `ContactLinks`

Do not create abstractions that are only used once unless they meaningfully improve readability.

## Footer

Include a simple footer containing:

* Joao's name
* Copyright information
* Contact link
* Vimeo or other professional social links

## Content and Placeholders

Until final content is provided:

* Use realistic placeholder project names and descriptions.
* Clearly label placeholder URLs and contact information.
* Keep placeholder content centralized where practical.
* Do not use large amounts of generic lorem ipsum.
* Do not invent professional credits or personal history and present them as factual.

## Code Quality

* Use TypeScript types instead of `any`.
* Keep components small and understandable.
* Remove unused imports and dead code.
* Follow the formatting conventions already present in the repository.
* Avoid duplicating project data.
* Do not introduce a database or authentication system.
* Do not expose private contact information unless it has been explicitly provided for publication.

## Completion Checklist

Before considering a task complete:

1. Confirm all routes load without errors.
2. Confirm navigation links work.
3. Confirm project cards link to the correct project pages.
4. Confirm the Vimeo embed is responsive.
5. Confirm the resume page handles the PDF properly.
6. Test the layout at desktop, tablet, and mobile widths.
7. Check for obvious accessibility issues.
8. Run the project's linting and type-checking commands.
9. Fix any errors introduced by the implementation.
10. Summarize the files changed and any placeholder content that still needs to be replaced.
