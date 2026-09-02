import { Link, Navigate, useParams } from "react-router-dom";
import LetterCircle from "../../components/LetterCircle/LetterCircle";
import Bubble from "../../components/Bubble/Bubble";
import { getPillar, pillars } from "../../data/ideals";
import "./PillarPage.css";

const RADIUS = 230;

export default function PillarPage() {
  const { pillarSlug } = useParams();
  const pillar = getPillar(pillarSlug);

  if (!pillar) return <Navigate to="/" replace />;

  const positions = pillar.bubbles.map((_, index) => {
    const angle = (360 / pillar.bubbles.length) * index - 90;
    const rad = (angle * Math.PI) / 180;
    return { x: Math.cos(rad) * RADIUS, y: Math.sin(rad) * RADIUS };
  });

  return (
    <section className="container pillar-page">
      <nav className="pillar-page__crumb eyebrow-note">
        <Link to="/">IDEALS</Link> / {pillar.title}
      </nav>

      <div className="orbit">
        <div className="orbit__center">
          <LetterCircle
            letter={pillar.letter}
            image={pillar.heroImage}
            accentVar={pillar.accentVar}
            size="lg"
          >
            <h1>{pillar.showcaseTitle}</h1>
            <p>{pillar.summary}</p>
          </LetterCircle>
        </div>

        {pillar.bubbles.map((bubble, index) => (
          <Bubble
            key={bubble.slug}
            to={`/pillar/${pillar.slug}/${bubble.slug}`}
            label={bubble.label}
            placeholder={bubble.placeholder}
            accentVar={pillar.accentVar}
            index={index}
            style={{ "--x": `${positions[index].x}px`, "--y": `${positions[index].y}px` }}
          />
        ))}
      </div>

      <nav className="pillar-page__siblings">
        {pillars.map((p) => (
          <Link
            key={p.slug}
            to={`/pillar/${p.slug}`}
            className={`pillar-page__sibling${p.slug === pillar.slug ? " is-active" : ""}`}
            style={{ "--accent": `var(${p.accentVar})` }}
          >
            {p.letter}
          </Link>
        ))}
      </nav>
    </section>
  );
}