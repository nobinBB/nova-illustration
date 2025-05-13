import { useEffect, useState } from "react";

export default function LinkCard({ url }) {
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    fetch(`/api/link-preview?url=${encodeURIComponent(url)}`)
      .then(r => r.json())
      .then(setMeta)
      .catch(console.error);
  }, [url]);

  if (!meta) return <p>Loading…</p>;

  return (
    <a href={meta.url} target="_blank" rel="noopener noreferrer" className="link-card">
      {meta.thumbnail && <img src={meta.thumbnail} alt="" />}
      <div className="meta">
        <h3>{meta.title || meta.url}</h3>
        {meta.description && <p>{meta.description}</p>}
      </div>
    </a>
  );
}
