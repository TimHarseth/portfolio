# Tim Harseth — portfolio

Personal portfolio site built with Next.js (App Router), React, TypeScript and Tailwind CSS. English and Norwegian, switchable from the header.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All text lives in `src/content/site.ts`, with one dictionary per language (`en` and `no`). Projects, courses, grades and skills are edited there; the components only handle layout.

## Deploy

Import the repository in Vercel. No configuration is needed — Vercel detects Next.js and runs `npm run build`.
