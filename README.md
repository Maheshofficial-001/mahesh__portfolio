# 3D Slide Portfolio

A Next.js portfolio with **3D slide** navigation. Each section (Hero, About, Projects, Contact) is a full-screen slide that transitions with perspective, rotation, and depth.

## Features

- **3D slide deck** – Slides move in 3D space (translate, rotateY, scale) when you switch sections
- **Keyboard** – Use ← / → to move between slides
- **Dots + arrows** – Side nav and prev/next buttons
- **Responsive** – Layout adapts to mobile and desktop

## Tech

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** – Spring-based 3D-style transitions

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Slides**: Edit components in `src/components/slides/` (Hero, About, Projects, Contact).
- **Colors**: Change CSS variables in `src/app/globals.css` (`--accent`, `--bg-deep`, etc.).
- **Content**: Update copy and links in each slide component.
