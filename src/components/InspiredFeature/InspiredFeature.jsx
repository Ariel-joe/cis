import inspired from "../../assets/images/Inspired_Logo-nobg.png";
import roundsquare from "../../assets/images/roundsquare-logo-nobg.png";
import "./InspiredFeature.css";

/**
 * A featured content block currently used at the top of the
 * Internationalism → Governance bubble page. It introduces the
 * Round Square + Inspired network context that governs Brookhouse's
 * international identity.
 *
 * Wired into BubblePage.jsx with a route check — hardcoded to that
 * one bubble on purpose (not a general "featured" mechanism).
 */
export default function InspiredFeature() {
  return (
    <section
      className="inspired-feature"
      aria-labelledby="inspired-feature-heading"
    >
      <div className="inspired-feature__logos">
        <a
          href="https://www.roundsquare.org/"
          target="_blank"
          rel="noreferrer"
          className="navbar__logo-link"
          aria-label="Round Square (opens in new tab)"
        >
          <img
            src={roundsquare}
            alt="Round Square"
            className="inspired-feature__logo"
          />
        </a>
        <span className="inspired-feature__divider" aria-hidden="true" />

        {/* link to inspired education */}
        <a
          href="https://www.inspirededu.com/"
          target="_blank"
          rel="noreferrer"
          className="navbar__logo-link"
          aria-label="Inspired Education (opens in new tab)"
        >
          <img
            src={inspired}
            alt="Inspired Education"
            className="inspired-feature__logo"
          />
        </a>
      </div>

      <h2 id="inspired-feature-heading" className="inspired-feature__heading">
        Inspiring Citizens Of The World
      </h2>

      <div className="inspired-feature__body">
        <p>
          Inspired offers academic excellence to over 95,000 students in 125
          schools across 30 countries. The international group of world-leading
          premium schools utilizes proven best educational practices from every
          corner of the globe to ensure students receive a world-class learning
          experience, from Kindergarten to Year 13.
        </p>
        <p>
          Inspired schools are individually designed and developed in response
          to their environment and location and remain anchored in the vibrant
          cultures in which they inhabit. Collectively, they form an
          international community that nurtures each student's academic and
          personal development with the application of a progressive, dynamic,
          and innovative educational model.
        </p>
      </div>
    </section>
  );
}
