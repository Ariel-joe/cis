import "./HeroPhilosophy.css";

/**
 * The Guiding Principles paragraph that overlays the tree in the hero.
 *
 * Rendered in two places using two variants:
 *   - <HeroPhilosophy variant="overlay" />  — inside Hero.jsx, sits
 *     absolutely-positioned on top of the tree image (desktop only).
 *   - <HeroPhilosophy variant="mobile" />   — inside Home.jsx below the
 *     hero, visible below 640px viewport width where the overlay would
 *     be unreadably small.
 *
 * All positioning, sizing, and typography knobs live in HeroPhilosophy.css.
 */
export default function HeroPhilosophy({ variant = "overlay" }) {
  const className = "hero-philosophy hero-philosophy--" + variant;
  return (
    <div className={className}>
      <p className="hero-philosophy__text">
        Rooted in our identity as a Round Square school, we bring Guiding
        Principles to life through the IDEALS; woven deliberately through every
        layer of the curriculum and daily school life. The IDEALS are not
        segregated from the Guiding Principles &mdash; they are how the
        principles come alive: shaping graduates equipped not only to succeed,
        but to lead with justice, tolerance, compassion, and humility, wherever
        their lives take them. This philosophy shapes not only what our students
        learn but who they become. This is the true measure of a Brookhouse
        education: not simply academic achievement but the formation of
        character.
      </p>
      <p className="hero-philosophy__cta">
        Click on each IDEAL to see a glimpse of how this is achieved
        within the Brookhouse Community.
      </p>
    </div>
  );
}
