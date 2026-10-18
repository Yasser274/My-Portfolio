# Portfolio Website

A personal portfolio website built with **React**, **TypeScript**, **Vite** and **Framer Motion**, styled with CSS Modules and one theme file.

## 🔗 Link

🌍 [Link](https://www.yasserswdev.com/)

## Tech Stack

- **Framework & Language**: React, TypeScript, Vite

- **Styling**: CSS Modules + `src/styles/theme.css`, self-hosted Bricolage Grotesque and Manrope fonts

- **Motion**: Framer Motion + Lenis (smooth scrolling)

## Features

- ✅ **Responsive Design** – Optimized for all devices
- ✅ **Projects Showcase** – Highlights my best work
- ✅ **Fast & Lightweight** – Powered by Vite

## Project Structure

```
react-portfolio/
├─ content/posts/        Blog posts written in Markdown (frontmatter = post info)
├─ scripts/
│  └─ build-posts.js     Turns content/posts/*.md into public/blog-content/*.json + public/posts.json
├─ public/               Static files served as-is (blog JSON, post images, favicon)
└─ src/
   ├─ main.tsx           Entry point, loads styles/global.css
   ├─ App.tsx            Routes
   ├─ styles/
   │  ├─ theme.css       ALL colors, sizes, radius, shadows (edit here to restyle)
   │  ├─ global.css      Reset + page-wide rules (imports theme.css)
   │  ├─ ui.module.css   Shared buttons, chips and cards
   │  └─ section.module.css  Shared width/spacing for home page sections
   ├─ components/
   │  ├─ layout/         Layout, Navbar, Footer
   │  ├─ ui/             Reusable pieces (Section, PostList, CountUp)
   │  └─ icons/          SVG icon components
   ├─ sections/          Home page sections (Hero, About, Projects, Experience, Skills, Certifications, Writing)
   ├─ pages/             Route pages (HomePage, BlogsPage, BlogPostPage, NotFoundPage)
   ├─ data/              All the content: site info, hero focus areas, projects, jobs, skills, certs
   ├─ types/             Shared TypeScript types
   ├─ hooks/             Custom hooks (usePosts, useSpotlight, useActiveSection)
   ├─ utils/             Helpers (animation settings, smooth scroll, image URLs)
   └─ assets/            Images only
```

Imports use the `@/` alias for `src/` (EX: `import SectionTitle from "@/components/ui/SectionTitle"`).

## Scripts

- `npm run dev` builds the blog posts, then starts Vite
- `npm run build` builds the blog posts, type checks and builds for production
- `npm run posts` rebuilds only the blog JSON from `content/posts`

