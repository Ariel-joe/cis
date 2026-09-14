import { Link } from "react-router-dom";
import heroBackground from "../../assets/images/hero-guiding-principles.png";
import HeroPhilosophy from "../HeroPhilosophy/HeroPhilosophy";
import { pillars, heroCaptionTop } from "../../data/ideals";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__frame">
          <img
            className="hero__background"
            src={heroBackground}
            alt="The IDEALS grow out of the Round Square guiding principles"
          />

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

          {pillars.map((pillar) => (
            <Link
              key={`${pillar.slug}-caption`}
              to={`/pillar/${pillar.slug}`}
              className="hero__caption"
              style={{ left: pillar.heroCaptionLeft, top: heroCaptionTop }}
            >
              {pillar.title}
            </Link>
          ))}

          <HeroPhilosophy variant="overlay" />
        </div>
      </div>
    </section>
  );
}
