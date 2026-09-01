import "./MediaGrid.css";

function MediaItem({ item }) {
  if (item.type === "image") {
    return (
      <figure className="media-item">
        <img src={item.src} alt={item.caption || ""} />
        {item.caption && <figcaption>{item.caption}</figcaption>}
      </figure>
    );
  }

  if (item.type === "video") {
    const isFile = /\.(mp4|webm|ogg)$/i.test(item.src || "");
    return (
      <figure className="media-item">
        {isFile ? (
          <video src={item.src} controls />
        ) : (
          <a className="media-item__link" href={item.src} target="_blank" rel="noreferrer">
            Watch video
          </a>
        )}
        {item.caption && <figcaption>{item.caption}</figcaption>}
      </figure>
    );
  }

  // document
  return (
    <figure className="media-item media-item--doc">
      <a className="media-item__link" href={item.src} target="_blank" rel="noreferrer">
        Open document
      </a>
      {item.caption && <figcaption>{item.caption}</figcaption>}
    </figure>
  );
}

export default function MediaGrid({ items }) {
  if (!items || items.length === 0) {
    return (
      <p className="media-grid__empty">
        Nothing's been added here yet. Add images, documents, or video to this
        bubble in <code>src/data/ideals.js</code>.
      </p>
    );
  }

  return (
    <div className="media-grid">
      {items.map((item, i) => (
        <MediaItem key={i} item={item} />
      ))}
    </div>
  );
}
