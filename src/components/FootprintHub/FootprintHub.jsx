import { Link } from "react-router-dom";
import background from "../../assets/images/footprint/hero-notoes(1).png";
import toe1 from "../../assets/images/footprint/toe-1.png";
import toe2 from "../../assets/images/footprint/toe-2.png";
import toe3 from "../../assets/images/footprint/toe-3.png";
import toe4 from "../../assets/images/footprint/toe-4.png";
import toe5 from "../../assets/images/footprint/toe-5.png";
import "./FootprintHub.css";

/* The 5 clickable toes on the Round Square footprint. Positions come
   from a pixel-precise extraction of the original artwork, expressed as
   percentages of the canvas so they scale with the frame at any size. */
const TOES = [
  {
    slug: "parents",
    label: "Parents",
    image: toe1,
    position: {
      left: "28.60%",
      top: "25.50%",
      width: "11.80%",
      height: "18.46%",
    },
  },
  {
    slug: "staff",
    label: "Staff",
    image: toe2,
    position: {
      left: "42.67%",
      top: "25.97%",
      width: "6.80%",
      height: "11.01%",
    },
  },
  {
    slug: "students",
    label: "Students",
    image: toe3,
    position: {
      left: "49.93%",
      top: "28.32%",
      width: "5.60%",
      height: "8.86%",
    },
  },
  {
    slug: "alumni",
    label: "Alumni",
    image: toe4,
    position: {
      left: "55.27%",
      top: "31.28%",
      width: "6.13%",
      height: "8.93%",
    },
  },
  {
    slug: "governance",
    label: "Governance",
    image: toe5,
    position: {
      left: "60.07%",
      top: "34.03%",
      width: "5.47%",
      height: "7.58%",
    },
  },
];

/* Rainbow arc tuning. Labels sit along an invisible circle whose centre
   is the middle of the frame. Adjust these to reshape the arc:
     ARC_RADIUS_PCT       — how far labels sit from the frame centre.
                            Larger = closer to the outer circle edge.
     ARC_SPREAD_DEG       — total width of the arc in degrees.
                            Larger = labels spread further apart.
     ARC_ROTATION_FACTOR  — how strongly labels tilt to follow the curve.
                            0 = all horizontal, 1 = full tangent (steep). */
const ARC_RADIUS_PCT = 44;
const ARC_SPREAD_DEG = 70;
const ARC_ROTATION_FACTOR = 0.6;

function labelPosition(i, total) {
  const step = ARC_SPREAD_DEG / (total - 1);
  const angleFromTop = -ARC_SPREAD_DEG / 2 + i * step;
  const rad = ((angleFromTop - 90) * Math.PI) / 180;
  const x = 50 + ARC_RADIUS_PCT * Math.cos(rad);
  const y = 50 + ARC_RADIUS_PCT * Math.sin(rad);
  const rotation = angleFromTop * ARC_ROTATION_FACTOR;
  return {
    left: x + "%",
    top: y + "%",
    "--rotation": rotation + "deg",
  };
}

export default function FootprintHub({ pillar }) {
  const style = { "--accent": "var(" + pillar.accentVar + ")" };
  return (
    <div className="footprint-hub" style={style}>
      <div className="footprint-hub__frame">
        <img
          className="footprint-hub__base"
          src={background}
          alt=""
          aria-hidden="true"
        />

        {TOES.map((toe, i) => (
          <Link
            key={"label-" + toe.slug}
            to={"/pillar/" + pillar.slug + "/" + toe.slug}
            className="footprint-hub__arc-label"
            style={labelPosition(i, TOES.length)}
          >
            {toe.label}
          </Link>
        ))}

        {TOES.map((toe) => (
          <Link
            key={"toe-" + toe.slug}
            to={"/pillar/" + pillar.slug + "/" + toe.slug}
            className="footprint-hub__toe"
            style={toe.position}
            aria-label={toe.label}
          >
            <img src={toe.image} alt="" />
          </Link>
        ))}
      </div>

      <ul className="footprint-hub__legend" aria-label="Community groups">
        {TOES.map((toe) => (
          <li key={toe.slug}>
            <Link to={"/pillar/" + pillar.slug + "/" + toe.slug}>
              {toe.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
