# Recipe Web App – Implementation Plan

## 1. Project Overview

This project is a **static recipe web application** intended as a first prototype. The app allows users to **browse cooking recipes publicly**. There is **no user authentication, no editing via UI, and no backend** in this version.

The application is designed to be:
- Simple and fast
- Easy to maintain
- Future-proof for later extensions (auth, editing, CMS)

The site will be hosted on **GitHub Pages**.

---

## 2. Scope (Prototype v1)

### Included
- Public recipe overview page
- Individual recipe detail pages
- Modern, clean UI
- Static content generated from Markdown files
- Image support for recipes
- GitHub Pages deployment

### Explicitly Excluded
- User authentication / login
- Editing recipes via UI
- Comments, likes, shares
- Backend or server-side logic
- Databases (SQLite not used in this version)

---

## 3. Technology Stack (Final Choices)

### Core Framework
- **Astro** – Static Site Generator
  - Reason: Content-first, fast, minimal JS, excellent Markdown support

### Styling
- **Tailwind CSS**
  - Reason: Modern UI, rapid iteration, utility-first styling

### Content Management
- **Markdown files** stored in the repository
- **Astro Content Collections** for schema validation

### Hosting & Deployment
- **GitHub Pages** for hosting
- **GitHub Actions** for CI/CD build and deploy

---

## 4. Data Model

Each recipe is represented by one Markdown file.

### Recipe Fields
- `title` (string)
- `image` (string – path to image in `/public`)
- `time` (number – minutes)
- `rating` (number – 1 to 5)
- `ingredients` (array of strings)
- `notes` (optional string)
- Body content: cooking instructions (Markdown)

### Example Recipe File

```md
---
title: "Spaghetti Carbonara"
image: "/images/recipes/carbonara.jpg"
time: 30
rating: 5
ingredients:
  - Spaghetti
  - Eggs
  - Pancetta
  - Parmesan cheese
  - Black pepper
notes: "Use freshly grated cheese."
---

## Instructions

1. Cook pasta in salted water.
2. Fry pancetta until crispy.
3. Mix eggs and cheese.
4. Combine everything off the heat.
```

---

## 5. Project Structure

```txt
/
├── src/
│   ├── content/
│   │   └── recipes/
│   │       └── *.md
│   ├── components/
│   │   ├── Header.astro
│   │   ├── RecipeCard.astro
│   │   └── RatingStars.astro
│   ├── layouts/
│   │   └── RecipeLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── recipes/
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── content/config.ts
├── public/
│   └── images/
│       └── recipes/
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

---

## 6. UI & UX Guidelines

### General Style
- Clean, modern, minimalistic
- Large typography
- Generous spacing
- Rounded cards
- Subtle shadows
- Neutral base colors with one accent color
- Light and dark mode

### Pages

#### Overview Page (`/`)
- Grid of recipe cards
- Each card shows:
  - Image
  - Title
  - Cooking time
  - Rating (stars)

#### Recipe Detail Page (`/recipes/[slug]`)
- Large hero image
- Recipe title
- Metadata (time, rating)
- Ingredients list
- Instructions (Markdown-rendered)
- Notes section (if present)

---

## 7. Astro Content Collection Schema

```ts
import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    time: z.number(),
    rating: z.number().min(1).max(5),
    ingredients: z.array(z.string()),
    notes: z.string().optional(),
  }),
});

export const collections = { recipes };
```

---

## 8. Deployment Requirements

- Static build only
- Output suitable for GitHub Pages
- Base path configurable (for repo-based Pages URLs)
- Automated deployment via GitHub Actions

---

## 9. Implementation Checklist (Actionable Tasks)

### Phase 1 – Project Setup
- [x] Initialize Astro project
- [x] Install and configure Tailwind CSS
- [x] Configure Astro for GitHub Pages deployment

### Phase 2 – Content System
- [x] Set up Astro Content Collections
- [x] Create sample recipe Markdown files
- [x] Add image assets to `/public/images/recipes`

### Phase 3 – UI Components
- [x] Create global layout and header
- [x] Implement RecipeCard component
- [x] Implement RatingStars component

### Phase 4 – Pages
- [x] Implement overview page (recipe list)
- [x] Implement dynamic recipe detail page
- [x] Connect pages to content collection

### Phase 5 – Styling & Polish
- [ ] Apply modern UI styling (spacing, typography)
- [ ] Ensure responsive layout
- [ ] Optimize images and layout performance

### Phase 6 – Deployment
- [ ] Add GitHub Actions workflow for Astro build
- [ ] Enable GitHub Pages
- [ ] Verify deployed site works correctly

---

## 10. Future Extensions (Out of Scope for v1)

- Git-based CMS editing UI
- Authentication (OAuth)
- Recipe search and filtering
- Ratings stored dynamically
- Migration to backend + SQLite

---

**End of Implementation Plan**
