import { Link, Navigate, useParams } from "react-router-dom";
import MediaGrid from "../../components/MediaGrid/MediaGrid";
import { getBubble } from "../../data/ideals";
import "./BubblePage.css";

export default function BubblePage() {
  const { pillarSlug, bubbleSlug } = useParams();
  const { pillar, bubble } = getBubble(pillarSlug, bubbleSlug);

  if (!pillar || !bubble) return <Navigate to="/" replace />;

  return (
    <section className="container bubble-page">
      <nav className="bubble-page__crumb eyebrow-note">
        <Link to="/">IDEALS</Link> /{" "}
        <Link to={`/pillar/${pillar.slug}`}>{pillar.title}</Link> / {bubble.label}
      </nav>

      <h1 style={{ color: `var(${pillar.accentVar})` }}>{bubble.label}</h1>

      <MediaGrid items={bubble.media} />
    </section>
  );
}
