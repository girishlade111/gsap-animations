# GSAP Animations

A Next.js 15 showcase page demonstrating scroll-triggered animations with [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/). Three full-screen sections, each animating in with a different effect as you scroll — built with React 19, Tailwind CSS, and shadcn/ui. Originally generated with [v0.app](https://v0.app).

## What It Does

A single-page demo of the most common GSAP scroll-animation patterns: elements fade/slide up, scale in, and slide in from opposite sides, all driven by `ScrollTrigger` with `toggleActions: "play none none reverse"` so animations replay naturally when scrolling back up. Useful as a starter for landing pages or as a reference for wiring GSAP into React via `useLayoutEffect` + `gsap.context`.

## Features

- **3 scroll-animated sections** — fade-and-slide-up, scale-and-fade-in, slide-in-from-sides
- **GSAP ScrollTrigger** — trigger positions, staggered tweens, reverse-on-scroll-back
- **Proper React cleanup** — `gsap.context()` scoped to component refs, `useLayoutEffect`
- **Dark, minimal hero styling** — Tailwind + shadcn/ui scaffolding
- Fully static-exportable — no API routes, no server actions; deploys as plain HTML/CSS/JS

## Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- [React](https://react.dev/) 19
- [GSAP](https://gsap.com/) 3 + ScrollTrigger plugin
- [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-animate`
- [shadcn/ui](https://ui.shadcn.com/) component scaffolding, [Lucide](https://lucide.dev/) icons
- TypeScript

## Quick Start

```bash
npm install
npm run dev     # → http://localhost:3000
npm run build   # production build
```

## Project Structure

```
app/
  page.tsx       # the three animated sections + GSAP ScrollTrigger setup
  layout.tsx     # root layout, fonts, analytics
  globals.css
components/
  theme-provider.tsx
lib/utils.ts     # clsx + tailwind-merge helper
next.config.mjs  # `output: 'export'` + basePath for GitHub Pages
public/          # placeholder assets
```

## Environment Variables

None required.

## Deployment

The app is fully static (`output: 'export'` in `next.config.mjs`) and is live on **GitHub Pages**: https://girishlade111.github.io/gsap-animations/

> **Note:** `next.config.mjs` sets `basePath: '/gsap-animations'` so assets resolve under the GitHub Pages subpath. If you deploy to a root domain (Vercel, Cloudflare Pages, Netlify), remove the `basePath` line.

Other options:
- **Vercel** — `vercel deploy` (zero config; this project originated on v0/Vercel)
- **Cloudflare Pages** — point at the repo, build command `npm run build`, output dir `out`

---

Built by Girish Lade — https://ladestack.in
