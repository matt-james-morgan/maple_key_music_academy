# Maple Key Music Academy — Agent Guidelines

## Project Overview

Website for Maple Key Music Academy. Built with React 19, TypeScript, Vite, and Material UI. Deployed on Vercel.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build tool**: Vite
- **UI library**: Material UI (MUI) v7 with Emotion
- **Routing**: React Router DOM v7
- **Email**: EmailJS (`@emailjs/browser`)
- **Analytics**: Vercel Analytics
- **Package manager**: pnpm

## Project Structure

```
src/
  components/       # Reusable UI sections
    Contact.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    Instructors.tsx
    Layout.tsx
    Programs.tsx
    Quote.tsx
    Testimonials.tsx
    ui/             # Primitive UI components
  pages/            # Route-level page components
    Home.tsx
    Teachers.tsx
    TeacherBio.tsx
  data/             # Static data / content
  lib/              # Utility functions
  theme.ts          # MUI theme configuration
  App.tsx           # Router setup
  main.tsx          # Entry point
```

## Development

```bash
pnpm dev       # Start dev server
pnpm build     # Type-check + build
pnpm lint      # Run ESLint
pnpm preview   # Preview production build
```

### EmailJS (local)

Copy `.env.example` → `.env.local` and set all `VITE_EMAILJS_*` values. **Restart the dev server** after editing env.

- **Pre-registration** uses `VITE_EMAILJS_PREREG_TEMPLATE_ID`. If it’s missing locally, the app falls back to `VITE_EMAILJS_TEMPLATE_ID` (email content may not match pre-reg fields).
- If sends fail from **localhost**, open [EmailJS](https://www.emailjs.com/) → **Account** → **Security** → **Allowed list** / domain restrictions and allow `http://localhost:5173` (or your Vite port).

## Conventions

- Use MUI components for all UI — avoid raw HTML elements where MUI equivalents exist.
- Theme customization lives in `src/theme.ts`; use `sx` prop or `styled()` for one-off overrides.
- Static content (instructor bios, program info) lives in `src/data/`.
- Images go in `src/assets/`.
- Page components in `src/pages/` are thin — delegate rendering to components in `src/components/`.
- No test suite currently exists; verify changes visually with `pnpm dev`.

## Active Branch

Current redesign work is on the `figma-redesign` branch. PRs target `main`.
