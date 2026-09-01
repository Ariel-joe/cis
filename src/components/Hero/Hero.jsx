import heroImage from "../../assets/images/hero-ideals.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <img
          className="hero__image"
          src={heroImage}
          alt="IDEALS — Internationalism, Democracy, Environmentalism, Adventure, Leadership, Service. Inspired by the Round Square."
        />
      </div>
    </section>
  );
}
