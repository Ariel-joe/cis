import "./LetterCircle.css";

/**
 * A crest-style medallion for a single IDEALS letter.
 * Pass an `image` path (see src/data/ideals.js) to show real artwork;
 * without one it falls back to the styled letter glyph.
 * Any `children` (e.g. a heading + short paragraph) render inside the
 * circle, stacked below the letter.
 */
export default function LetterCircle({ letter, image, accentVar, size = "md", children }) {
  return (
    <div
      className={`letter-circle letter-circle--${size}`}
      style={{ "--accent": `var(${accentVar})` }}
    >
      <div className="letter-circle__art">
        {image ? (
          <img className="letter-circle__image" src={image} alt={`Letter ${letter}`} />
        ) : (
          <span className="letter-circle__glyph">{letter}</span>
        )}
      </div>
      {children && <div className="letter-circle__content">{children}</div>}
    </div>
  );
}