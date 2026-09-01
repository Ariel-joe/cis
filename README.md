# Brookhouse IDEALS site

A minimal Vite + React site for Brookhouse School's IDEALS pages.

## Run locally

```
npm install
npm run dev
```

## Editing content

Everything content-wise lives in one file: `src/data/ideals.js`.

- Edit a pillar's paragraph, letter, or page title there.
- Edit a pillar's `bubbles` array to add/remove/rename bubbles. Bubbles
  currently marked `placeholder: true` render with a dashed outline —
  set `placeholder: false` once real content exists.
- Fill in a bubble's `media` array to add images, documents, or video to
  its page: `{ type: "image" | "document" | "video", src, caption }`.

## Swapping in the real letter artwork

Each letter currently renders as styled type inside `LetterCircle`
(`src/components/LetterCircle/LetterCircle.jsx`). Once the individual
letter images are ready, swap the `<span>` glyph for an `<img>` there.

## Structure

```
src/
  pages/        Home, PillarPage (the orbit page per letter), BubblePage
  components/   NavBar, Hero, LetterCircle, Bubble, MediaGrid
  data/         ideals.js — single source of truth for content
  styles/       design tokens + global styles
  assets/       images (hero artwork lives here)
```
