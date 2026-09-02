import { Link } from "react-router-dom";
import heroBackground from "../../assets/images/Hero_NoIDEALS.png";
import { pillars } from "../../data/ideals";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__frame">
          <img className="hero__background" src={heroBackground} alt="Logo" />

          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              to={`/pillar/${pillar.slug}`}
              className="hero__letter"
              style={pillar.heroPosition}
              aria-label={pillar.title}
              title={pillar.title}
            >
              <img src={pillar.heroImage} alt={pillar.letter} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}