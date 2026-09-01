import { Link } from "react-router-dom";
import "./Bubble.css";

export default function Bubble({ to, label, placeholder, accentVar, style, index }) {
  return (
    <Link
      to={to}
      className={`bubble${placeholder ? " bubble--placeholder" : ""}`}
      style={{ "--accent": `var(${accentVar})`, ...style, "--delay": `${index * 70}ms` }}
    >
      <span className="bubble__label">{label}</span>
    </Link>
  );
}
