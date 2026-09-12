import { Link, Navigate, useParams } from "react-router-dom";
import MediaGrid from "../../components/MediaGrid/MediaGrid";
import InspiredFeature from "../../components/InspiredFeature/InspiredFeature";
import { getBubble } from "../../data/ideals";
import "./BubblePage.css";

export default function BubblePage() {
  const { pillarSlug, bubbleSlug } = useParams();

  const pSlug = pillarSlug?.trim().toLowerCase();
  const bSlug = bubbleSlug?.trim().toLowerCase();

  const { pillar, bubble } = getBubble(pSlug, bSlug);

  if (!pillar || !bubble) return <Navigate to="/" replace />;

  const showInspiredFeature =
    pSlug === "internationalism" && bSlug === "governance";

  return (
    <section className="container bubble-page">
      <nav className="bubble-page__crumb eyebrow-note">
        <Link to="/">IDEALS</Link> /{" "}
        <Link to={`/pillar/${pillar.slug}`}>{pillar.title}</Link> /{" "}
        {bubble.label}
      </nav>

      <h1 style={{ color: `var(${pillar.accentVar})` }}>{bubble.label}</h1>

      {showInspiredFeature ? (
        <InspiredFeature />
      ) : (
        <MediaGrid
          items={bubble.media}
          accentVar={pillar.accentVar}
          label={bubble.label}
        />
      )}
    </section>
  );
}
