import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import LetterCircle from "../../components/LetterCircle/LetterCircle";
import { pillars } from "../../data/ideals";
import "./Home.css";

const RADIUS = 250;

export default function Home() {
  return (
    <>
            {/* <section className="container intro">
        <p>
          The IDEALS at Brookhouse Schools are the six core pillars of the
          Round Square international network philosophy, focusing on
          character development and servant leadership.
        </p>
      </section> */}
      <Hero />



      {/* <section className="container ring-section" aria-label="The six IDEALS pillars">
        <div className="ring">
          <div className="ring__hub">
            <span>Round</span>
            <span>Square</span>
          </div>
          {pillars.map((pillar, index) => {
            const angle = (360 / pillars.length) * index - 90;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * RADIUS;
            const y = Math.sin(rad) * RADIUS;
            return (
              <Link
                key={pillar.slug}
                to={`/pillar/${pillar.slug}`}
                className="ring__item"
                style={{ "--x": `${x}px`, "--y": `${y}px`, "--delay": `${index * 80}ms` }}
              >
                <LetterCircle
                  letter={pillar.letter}
                  image={pillar.image}
                  accentVar={pillar.accentVar}
                  size="md"
                />
                <span className="ring__item-title">{pillar.title}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container sources">
        <p className="eyebrow-note">
          Read more at{" "}
          <a href="https://www.brookhouse.ac.ke/" target="_blank" rel="noreferrer">
            brookhouse.ac.ke
          </a>{" "}
          and{" "}
          <a href="https://www.roundsquare.org/school/brookhouse-school/" target="_blank" rel="noreferrer">
            roundsquare.org
          </a>
          .
        </p>
      </section> */}
    </>
  );
}