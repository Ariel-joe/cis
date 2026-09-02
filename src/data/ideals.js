import heroI from "../assets/images/hero-letters/i.png";
import heroD from "../assets/images/hero-letters/d.png";
import heroE from "../assets/images/hero-letters/e.png";
import heroA from "../assets/images/hero-letters/a.png";
import heroL from "../assets/images/hero-letters/l.png";
import heroS from "../assets/images/hero-letters/s.png";

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
 * `image`: path to this letter's artwork used on the ring/orbit medallions
 * (Home page and the pillar page's center circle), served from /public so
 * you can just drop a new file in public/images/letters/ with the same
 * name — no other code needs to change. Leave it as `null` to fall back
 * to the styled-text letter.
 *
 * `heroImage` / `heroPosition`: the same letter's artwork as it sits on
 * top of the hero banner (see Hero.jsx), positioned to match where it
 * falls in the original full IDEALS artwork. `heroPosition` values are
 * percentages of the hero image's width/height, so they stay lined up
 * at any screen size. Nudge the numbers slightly if a letter ever looks
 * off after you swap in a different hero background.
 *
 * `heroCaptionLeft`: horizontal center (as a % of the hero width) for
 * this pillar's clickable caption word underneath the letters — matches
 * where each word sat in the original artwork. The row's vertical
 * position is shared by all six and lives in `heroCaptionTop` below.
 */

export const heroCaptionTop = "86.1%";

export const pillars = [
  {
    slug: "internationalism",
    letter: "I",
    title: "Internationalism",
    image: "/images/letters/internationalism.svg",
    heroImage: heroI,
    heroPosition: { left: "2.4%", top: "33.2%", width: "14.5%", height: "37.9%" },
    heroCaptionLeft: "11.4%",
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
    image: "/images/letters/democracy.svg",
    heroImage: heroD,
    heroPosition: { left: "14.4%", top: "46.0%", width: "16.9%", height: "22.4%" },
    heroCaptionLeft: "30.1%",
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
    image: "/images/letters/environmentalism.svg",
    heroImage: heroE,
    heroPosition: { left: "31.2%", top: "43.9%", width: "16.0%", height: "24.6%" },
    heroCaptionLeft: "48.1%",
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
    image: "/images/letters/adventure.svg",
    heroImage: heroA,
    heroPosition: { left: "47.6%", top: "46.5%", width: "16.6%", height: "21.9%" },
    heroCaptionLeft: "66.1%",
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
    image: "/images/letters/leadership.svg",
    heroImage: heroL,
    heroPosition: { left: "63.5%", top: "46.3%", width: "17.0%", height: "22.2%" },
    heroCaptionLeft: "80.7%",
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
    image: "/images/letters/service.svg",
    heroImage: heroS,
    heroPosition: { left: "79.7%", top: "46.5%", width: "14.7%", height: "22.0%" },
    heroCaptionLeft: "93.2%",
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