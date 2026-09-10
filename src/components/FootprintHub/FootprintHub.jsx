import { Link } from "react-router-dom";
import background from "../../assets/images/footprint/hero-notoes(1).png";
import toe1 from "../../assets/images/footprint/toe-1.png";
import toe2 from "../../assets/images/footprint/toe-2.png";
import toe3 from "../../assets/images/footprint/toe-3.png";
import toe4 from "../../assets/images/footprint/toe-4.png";
import toe5 from "../../assets/images/footprint/toe-5.png";
import "./FootprintHub.css";

/* Visual positions of the 5 toes on the footprint background. Percentages
   of the canvas so they scale with the frame at any size. Order goes
   big-toe first, then along the foot from left to right. Slug and label
   come from the pillar's own bubbles array — this file just supplies the
   toe artwork and where to place it. */
const TOES = [
  {
    image: toe1,
    position: {
      left: "28.60%",
      top: "25.50%",
      width: "11.80%",
      height: "18.46%",
    },
  },
  {
    image: toe2,
    position: {
      left: "42.67%",
      top: "25.97%",
      width: "6.80%",
      height: "11.01%",
    },
  },
  {
    image: toe3,
    position: {
      left: "49.93%",
      top: "28.32%",
      width: "5.60%",
      height: "8.86%",
    },
  },
  {
    image: toe4,
    position: {
      left: "55.27%",
      top: "31.28%",
      width: "6.13%",
      height: "8.93%",
    },
  },
  {
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
  if (total <= 1) {
    return {
      left: "50%",
      top: 50 - ARC_RADIUS_PCT + "%",
      "--rotation": "0deg",
    };
  }
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
  const activeToes = pillar.bubbles.slice(0, TOES.length);

  return (
    <div className="footprint-hub" style={style}>
      <div className="footprint-hub__frame">
        <img
          className="footprint-hub__base"
          src={background}
          alt=""
          aria-hidden="true"
        />

        {activeToes.map((bubble, i) => (
          <Link
            key={"label-" + bubble.slug}
            to={"/pillar/" + pillar.slug + "/" + bubble.slug}
            className="footprint-hub__arc-label"
            style={labelPosition(i, activeToes.length)}
          >
            {bubble.label}
          </Link>
        ))}

        {TOES.map((toeVisual, i) => {
          const bubble = activeToes[i];
          if (!bubble) {
            return (
              <img
                key={"toe-static-" + i}
                className="footprint-hub__toe-static"
                src={toeVisual.image}
                style={toeVisual.position}
                alt=""
                aria-hidden="true"
              />
            );
          }
          return (
            <Link
              key={"toe-" + bubble.slug}
              to={"/pillar/" + pillar.slug + "/" + bubble.slug}
              className="footprint-hub__toe"
              style={toeVisual.position}
              aria-label={bubble.label}
            >
              <img src={toeVisual.image} alt="" />
            </Link>
          );
        })}
      </div>

      <ul className="footprint-hub__legend" aria-label="Community groups">
        {pillar.bubbles.map((bubble) => (
          <li key={bubble.slug}>
            <Link to={"/pillar/" + pillar.slug + "/" + bubble.slug}>
              {bubble.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
