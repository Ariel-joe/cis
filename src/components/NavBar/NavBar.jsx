import { Link } from "react-router-dom";
import Logo from "../../assets/images/Brookhouse_logo.png";
import Inspired from "../../assets/images/Inspired_Logo-nobg.png";
import Roundsquare from "../../assets/images/roundsquare-logo-nobg.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container navbar__row">
        <div className="navbar__left">
          <a
            href="https://www.roundsquare.org/"
            target="_blank"
            rel="noreferrer"
            className="navbar__logo-link"
            aria-label="Round Square (opens in new tab)"
          >
            <img
              className="navbar__image navbar__image--roundsquare"
              src={Roundsquare}
              alt="Round Square"
            />
          </a>
          <Link
            to="/"
            className="navbar__logo-link"
            aria-label="Brookhouse Schools home"
          >
            <img
              className="navbar__image navbar__image--brookhouse"
              src={Logo}
              alt="Brookhouse Schools"
            />
          </Link>
        </div>

        <div>
          <h4>Community Voices Showcase</h4>
        </div>
        <a
          href="https://www.inspirededu.com/"
          target="_blank"
          rel="noreferrer"
          className="navbar__logo-link"
          aria-label="Inspired Education (opens in new tab)"
        >
          <img
            className="navbar__image navbar__image--inspired"
            src={Inspired}
            alt="Inspired Education"
          />
        </a>
      </div>
    </header>
  );
}
