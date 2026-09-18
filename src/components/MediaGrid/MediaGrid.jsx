import { useCallback, useEffect, useRef, useState } from "react";
import "./MediaGrid.css";

const BATCH_SIZE = 4;

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
  const poster = raw.poster ? normalizeSrc(raw.poster) : undefined;
  return {
    ...raw,
    src,
    poster,
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
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const caption = captionFor(item);
  const markReady = () => setLoaded(true);

  /* If the image is already cached the onLoad event may fire before React
     attaches the handler; check `complete` on mount to avoid a stuck
     skeleton. */
  useEffect(() => {
    if (
      imgRef.current &&
      imgRef.current.complete &&
      imgRef.current.naturalWidth > 0
    ) {
      setLoaded(true);
    }
  }, []);

  return (
    <figure className="media-item media-item--visual">
      <button
        type="button"
        className="media-item__button"
        onClick={onOpen}
        aria-label={"Open " + caption}
      >
        {!loaded && (
          <span className="media-item__skeleton" aria-hidden="true" />
        )}
        <img
          ref={imgRef}
          src={item.src}
          alt={caption}
          loading="lazy"
          onLoad={markReady}
          onError={markReady}
          className={loaded ? "is-loaded" : ""}
        />
      </button>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function VideoTile({ item, onOpen }) {
  const [loaded, setLoaded] = useState(false);
  const caption = captionFor(item);
  const isFile = VIDEO_EXT.has(fileExtension(item.src));
  const hasPoster = Boolean(item.poster);
  const markReady = () => setLoaded(true);
  const showSpinner = isFile && !hasPoster && !loaded;
  const showPlay = !isFile || hasPoster || loaded;

  return (
    <figure className="media-item media-item--visual">
      <button
        type="button"
        className="media-item__button media-item__button--video"
        onClick={onOpen}
        aria-label={"Play " + caption}
      >
        {!loaded && !hasPoster && (
          <span className="media-item__skeleton" aria-hidden="true" />
        )}
        {isFile ? (
          <video
            src={item.src}
            poster={item.poster}
            preload={hasPoster ? "none" : "metadata"}
            muted
            playsInline
            onLoadedMetadata={markReady}
            onError={markReady}
            className={loaded || hasPoster ? "is-loaded" : ""}
          />
        ) : (
          <div className="media-item__video-placeholder" />
        )}
        {showSpinner && (
          <span className="media-item__spinner" aria-hidden="true" />
        )}
        {showPlay && (
          <span className="media-item__play" aria-hidden="true">
            {"\u25B6"}
          </span>
        )}
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
  const [mediaLoaded, setMediaLoaded] = useState(false);

  useEffect(() => {
    if (!item) return undefined;
    setMediaLoaded(false);
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
  const markReady = () => setMediaLoaded(true);

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
        <div className="lightbox__media">
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={caption}
              onLoad={markReady}
              onError={markReady}
            />
          ) : (
            <video
              src={item.src}
              poster={item.poster}
              controls
              autoPlay
              playsInline
              onLoadedData={markReady}
              onError={markReady}
            />
          )}
          {!mediaLoaded && (
            <span className="lightbox__spinner" aria-hidden="true" />
          )}
        </div>
        <p className="lightbox__caption">{caption}</p>
      </div>
    </div>
  );
}

export default function MediaGrid({ items, accentVar, label }) {
  const [openItem, setOpenItem] = useState(null);
  const closeLightbox = useCallback(() => setOpenItem(null), []);

  /* Infinite-scroll batching: only the first N items render on mount, and
     each time the sentinel below the grid scrolls into view we bump N
     by BATCH_SIZE. The sentinel is removed once every item is visible.
     This keeps the initial paint fast on bubble pages with 8-12+ items. */
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const sentinelRef = useRef(null);

  /* Reset visibleCount whenever the item list changes (e.g. navigating
     between bubbles); otherwise scrolling a long page and then jumping
     to a shorter one leaves visibleCount stuck at the old value. */
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [items]);

  const totalCount = items ? items.length : 0;
  const hasMore = visibleCount < totalCount;

  /* Observe the sentinel: when it enters the viewport, load the next
     batch. rootMargin gives us a ~200px head start so the next tiles
     start loading before the spinner actually reaches the viewport.

     Re-runs on every visibleCount change so that when a new batch
     renders and the sentinel is STILL in view (short pages, tall
     viewports), the next batch loads too. Without this the loader
     would stall after the first batch on any page where the sentinel
     stays visible. */
  useEffect(() => {
    if (!hasMore) return undefined;
    const node = sentinelRef.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setVisibleCount(totalCount);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, totalCount));
          }
        });
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, totalCount, visibleCount]);

  if (!items || items.length === 0) {
    const emptyStyle = accentVar
      ? { "--empty-accent": "var(" + accentVar + ")" }
      : undefined;
    const heading = label ? label + " is on the way" : "Coming soon";
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
  const visible = normalized.slice(0, visibleCount);

  return (
    <>
      <div className="media-grid">
        {visible.map((item, i) => {
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

      {hasMore && (
        <div
          ref={sentinelRef}
          className="media-grid__sentinel"
          aria-live="polite"
          aria-label="Loading more items"
        >
          <span className="media-grid__sentinel-spinner" aria-hidden="true" />
        </div>
      )}

      <Lightbox
        key={openItem ? openItem.src : "closed"}
        item={openItem}
        onClose={closeLightbox}
      />
    </>
  );
}