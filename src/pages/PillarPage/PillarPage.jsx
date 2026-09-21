import { Link, Navigate, useParams } from "react-router-dom";
import FootprintHub from "../../components/FootprintHub/FootprintHub";
import { getPillar, pillars } from "../../data/ideals";
import "./PillarPage.css";

export default function PillarPage() {
  const { pillarSlug } = useParams();
  const pillar = getPillar(pillarSlug);

  if (!pillar) return <Navigate to="/" replace />;

  return (
    <section className="container pillar-page">
      <nav className="pillar-page__crumb eyebrow-note">
        <Link to="/">IDEALS</Link> / {pillar.title}
      </nav>

      <header className="pillar-page__header">
        <h1 style={{ color: "var(" + pillar.accentVar + ")" }}>
          {pillar.title}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: pillar.summary }} />
      </header>

      <FootprintHub pillar={pillar} />

      <nav className="pillar-page__siblings" aria-label="Other pillars">
        {pillars.map((p) => (
          <Link
            key={p.slug}
            to={"/pillar/" + p.slug}
            className={
              "pillar-page__sibling" +
              (p.slug === pillar.slug ? " is-active" : "")
            }
            style={{ "--accent": "var(" + p.accentVar + ")" }}
            aria-label={p.title}
          >
            {p.letter}
          </Link>
        ))}
      </nav>
    </section>
  );
}
