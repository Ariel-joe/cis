/**
 * Single source of truth for the IDEALS site content.
 *
 * To add or edit a pillar page: edit the matching object below.
 * To add or edit a bubble on a pillar page: edit its `bubbles` array.
 * To add media to a bubble's own page: fill in that bubble's `media` array.
 *
 * media item shape: { type: "image" | "document" | "video", src, caption }
 *   - image / video: src is a URL or an imported asset
 *   - document: src is a URL to the file (pdf, docx, etc.)
 *
 * A bubble with `placeholder: true` renders with a dashed "add content" look
 * so it's obvious which ones still need real content.
 *
 * `image`: path to this letter's artwork, served from /public so you can
 * just drop a new file in public/images/letters/ with the same name (or
 * change the path here) — no other code needs to change. Leave it as
 * `null` to fall back to the styled-text letter.
 */

export const pillars = [
  {
    slug: "internationalism",
    letter: "I",
    title: "Internationalism",
    image: "/images/letters/i.png",
    accentVar: "--pillar-internationalism",
    summary:
      "Fostering a global perspective, cross-cultural understanding, and appreciation for diversity among students from over 50 nations.",
    showcaseTitle: "Internationalism",
    bubbles: [
      { slug: "bubble-1", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-2", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-3", label: "Add a bubble", placeholder: true, media: [] },
    ],
  },
  {
    slug: "democracy",
    letter: "D",
    title: "Democracy",
    image: "/images/letters/d.png",
    accentVar: "--pillar-democracy",
    summary:
      "Encouraging active participation, shared responsibility, and freedom of expression within the school governance and community.",
    showcaseTitle: "Democracy",
    bubbles: [
      { slug: "bubble-1", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-2", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-3", label: "Add a bubble", placeholder: true, media: [] },
    ],
  },
  {
    slug: "environmentalism",
    letter: "E",
    title: "Environmentalism",
    image: "/images/letters/e.png",
    accentVar: "--pillar-environmentalism",
    summary:
      "Building a deep personal awareness of environmental sustainability and ecological responsibility.",
    showcaseTitle: "Environmentalism",
    bubbles: [
      { slug: "bubble-1", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-2", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-3", label: "Add a bubble", placeholder: true, media: [] },
    ],
  },
  {
    slug: "adventure",
    letter: "A",
    title: "Adventure",
    image: "/images/letters/a.png",
    accentVar: "--pillar-adventure",
    summary:
      "Challenging students physically and mentally through outdoor pursuits, expeditions, and experiential learning.",
    showcaseTitle: "Adventure",
    bubbles: [
      { slug: "bubble-1", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-2", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-3", label: "Add a bubble", placeholder: true, media: [] },
    ],
  },
  {
    slug: "leadership",
    letter: "L",
    title: "Leadership",
    image: "/images/letters/L.png",
    accentVar: "--pillar-leadership",
    summary:
      "Cultivating self-discipline, initiative, and collaborative skills to guide and serve others effectively.",
    showcaseTitle: "Leadership",
    bubbles: [
      { slug: "bubble-1", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-2", label: "Add a bubble", placeholder: true, media: [] },
      { slug: "bubble-3", label: "Add a bubble", placeholder: true, media: [] },
    ],
  },
  {
    slug: "service",
    letter: "S",
    title: "Service",
    image: "/images/letters/s.png",
    accentVar: "--pillar-service",
    summary:
      "Committing to community engagement and humanitarian projects locally and internationally, such as Round Square International Service projects.",
    showcaseTitle: "Community Voice Showcase",
    bubbles: [
      { slug: "alumni", label: "Alumni", placeholder: false, media: [] },
      { slug: "bptsa", label: "BPTSA", placeholder: false, media: [] },
      { slug: "cmt-and-board", label: "CMT and Board", placeholder: false, media: [] },
      { slug: "minutes", label: "Minutes", placeholder: false, media: [] },
      { slug: "students", label: "Students", placeholder: false, media: [] },
    ],
  },
];

export function getPillar(slug) {
  return pillars.find((p) => p.slug === slug);
}

export function getBubble(pillarSlug, bubbleSlug) {
  const pillar = getPillar(pillarSlug);
  if (!pillar) return { pillar: undefined, bubble: undefined };
  return { pillar, bubble: pillar.bubbles.find((b) => b.slug === bubbleSlug) };
}