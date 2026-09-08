import { useCallback, useEffect, useState } from "react";
import "./MediaGrid.css";

/* Guess a filename from a src URL/path — used as a caption fallback so
   every tile has something readable at the bottom even if `caption`
   wasn't set in the data. */
function fileNameFromSrc(src) {
  if (!src) return "file";
  try {
    const url = new URL(src, window.location.origin);
    return decodeURIComponent(url.pathname.split("/").pop() || "file");
  } catch (e) {
    return src.split("/").pop() || "file";
  }
}

function fileExtension(src) {
  const name = fileNameFromSrc(src);
  const dot = name.lastIndexOf(".");
  return dot > -1 ? name.slice(dot + 1).toLowerCase() : "file";
}

/* Turn "photo_of_kids.jpg" -> "photo of kids" for use as a caption
   fallback when the data entry didn't specify one. */
function prettifyFileName(name) {
  const dot = name.lastIndexOf(".");
  const stem = dot > -1 ? name.slice(0, dot) : name;
  return stem.replace(/[_-]+/g, " ").trim();
}

const IMAGE_EXT = new Set(["jpg", "jpeg", "png", "gif", "webp", "svg", "avif"]);
const VIDEO_EXT = new Set(["mp4", "webm", "ogg", "mov"]);

function inferType(src) {
  const ext = fileExtension(src);
  if (IMAGE_EXT.has(ext)) return "image";
  if (VIDEO_EXT.has(ext)) return "video";
  return "document";
}

/* Ensure paths that live in /public land at the site root at runtime.
   Absolute URLs and data URIs pass through unchanged. */
function normalizeSrc(src) {
  if (!src || typeof src !== "string") return src;
  if (src.startsWith("/") || src.startsWith("data:")) return src;
  if (/^https?:\/\//i.test(src)) return src;
  return "/" + src;
}

/* Accept either the full object form OR a plain string path, so entries
   like `"Educators-and-staff/4Q7A4071.jpg"` work the same as
   `{ type: "image", src: "/Educators-and-staff/4Q7A4071.jpg", caption: "..." }`.
   Type is inferred from the file extension. */
function normalizeItem(raw) {
  if (typeof raw === "string") {
    const src = normalizeSrc(raw);
    return { type: inferType(src), src, caption: undefined };
  }
  const src = normalizeSrc(raw.src);
  return {
    ...raw,
    src,
    type: raw.type || inferType(src),
  };
}

/* Per-extension color tints for the document tile so the grid stays lively
   even when a bubble is doc-heavy. Anything unrecognised falls back to
   maroon. */
const DOC_TINTS = {
  pdf: "#b3261e",
  doc: "#3e6e8e",
  docx: "#3e6e8e",
  xls: "#3f6b35",
  xlsx: "#3f6b35",
  ppt: "#c9761f",
  pptx: "#c9761f",
  txt: "#4a4033",
};

function captionFor(item) {
  return item.caption || prettifyFileName(fileNameFromSrc(item.src));
}

function ImageTile({ item, onOpen }) {
  const caption = captionFor(item);
  return (
    <figure className="media-item media-item--visual">
      <button
        type="button"
        className="media-item__button"
        onClick={onOpen}
        aria-label={"Open " + caption}
      >
        <img src={item.src} alt={caption} />
      </button>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function VideoTile({ item, onOpen }) {
  const caption = captionFor(item);
  const isFile = VIDEO_EXT.has(fileExtension(item.src));
  return (
    <figure className="media-item media-item--visual">
      <button
        type="button"
        className="media-item__button media-item__button--video"
        onClick={onOpen}
        aria-label={"Play " + caption}
      >
        {isFile ? (
          <video src={item.src} preload="metadata" muted playsInline />
        ) : (
          <div className="media-item__video-placeholder" />
        )}
        <span className="media-item__play" aria-hidden="true">
          {"\u25B6"}
        </span>
      </button>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function DocumentTile({ item }) {
  const caption = captionFor(item);
  const ext = fileExtension(item.src);
  const tint = DOC_TINTS[ext] || "var(--color-maroon)";
  const download = item.filename || fileNameFromSrc(item.src);
  const iconStyle = { "--doc-tint": tint };

  return (
    <figure className="media-item media-item--doc">
      <a
        className="media-item__doc-link"
        href={item.src}
        download={download}
        aria-label={"Download " + caption}
      >
        <span className="media-item__doc-icon" style={iconStyle}>
          <span className="media-item__doc-ext">{ext.toUpperCase()}</span>
        </span>
        <span className="media-item__doc-hint">Click to download</span>
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;
  const caption = captionFor(item);
  const stopBubble = (e) => e.stopPropagation();

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close"
      >
        {"\u00D7"}
      </button>
      <div className="lightbox__stage" onClick={stopBubble}>
        {item.type === "image" ? (
          <img src={item.src} alt={caption} />
        ) : (
          <video src={item.src} controls autoPlay playsInline />
        )}
        <p className="lightbox__caption">{caption}</p>
      </div>
    </div>
  );
}

export default function MediaGrid({ items, accentVar, label }) {
  const [openItem, setOpenItem] = useState(null);
  const closeLightbox = useCallback(() => setOpenItem(null), []);

  if (!items || items.length === 0) {
    const emptyStyle = accentVar
      ? { "--empty-accent": "var(" + accentVar + ")" }
      : undefined;
    const heading = label ? label + "" : "Coming soon";
    return (
      <div className="media-grid__empty" style={emptyStyle}>
        <svg
          className="media-grid__empty-icon"
          viewBox="0 0 80 64"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="6" y="8" width="68" height="48" rx="4" />
          <circle cx="24" cy="24" r="4" />
          <path d="M6 44 L 26 28 L 40 40 L 56 24 L 74 40" />
        </svg>
        <h3 className="media-grid__empty-title">{heading}</h3>
        <p className="media-grid__empty-body">
          We're gathering photos, documents, and video to share here. Please
          check back soon.
        </p>
      </div>
    );
  }

  const normalized = items.map(normalizeItem);

  return (
    <>
      <div className="media-grid">
        {normalized.map((item, i) => {
          if (item.type === "image") {
            return (
              <ImageTile key={i} item={item} onOpen={() => setOpenItem(item)} />
            );
          }
          if (item.type === "video") {
            return (
              <VideoTile key={i} item={item} onOpen={() => setOpenItem(item)} />
            );
          }
          return <DocumentTile key={i} item={item} />;
        })}
      </div>
      <Lightbox item={openItem} onClose={closeLightbox} />
    </>
  );
}
