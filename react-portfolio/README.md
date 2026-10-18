# Portfolio

Personal portfolio and blog built with React, TypeScript, and Vite.

**Live:** [yasserswdev.com](https://www.yasserswdev.com/)

## Tech Stack

- **Core:** React 19, TypeScript, Vite
- **Styling:** CSS Modules, Bricolage Grotesque & Manrope (Fontsource)
- **Animation & Motion:** Framer Motion, Lenis

## Development

Posts are authored as Markdown in `content/posts/` and converted to JSON at build time via `scripts/build-posts.js`.

```bash
# Install dependencies
npm install

# Start dev server (automatically compiles blog posts first)
npm run dev

# Production build
npm run build