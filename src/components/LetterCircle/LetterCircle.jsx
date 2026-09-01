import "./LetterCircle.css";

/**
 * A crest-style medallion for a single IDEALS letter.
 * Pass an `image` path (see src/data/ideals.js) to show real artwork;
 * without one it falls back to the styled letter glyph.
 */
export default function LetterCircle({ letter, image, accentVar, size = "md" }) {
  return (
    <div
      className={`letter-circle letter-circle--${size}`}
      style={{ "--accent": `var(${accentVar})` }}
    >
      {image ? (
        <img className="letter-circle__image" src={image} alt={`Letter ${letter}`} />
      ) : (
        <span className="letter-circle__glyph">{letter}</span>
      )}
    </div>
  );
}