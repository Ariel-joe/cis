import { Link } from "react-router-dom";
import Logo from "../../assets/images/Brookhouse_logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container navbar__row">
        <Link to="/" className="navbar__mark">
          <img
          className="navbar__image"
          src={Logo}
          width="210"
          height="45"
          alt="navbar logo"
        />
        </Link>
        {/* <span className="navbar__tag">Inspired by the Round Square</span> */}
      </div>
    </header> 
  );
}
