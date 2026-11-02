"use client";

import { useState } from "react";
import { mapEmbed, mapLink } from "@/lib/site";

type Props = { labels: { show: string; note: string; title: string; open: string } };

/** Google mapa se učitava tek na klik — brže učitavanje stranice i bez kolačića trećih strana. */
export function MapEmbed({ labels }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="map auto-reveal">
      {loaded ? (
        <iframe src={mapEmbed} title={labels.title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      ) : (
        <div className="map__placeholder">
          <div>
            <p className="lead">Obrenovac · Sava</p>
            <p className="muted">{labels.note}</p>
            <button suppressHydrationWarning className="btn btn--ghost" type="button" onClick={() => setLoaded(true)}>{labels.show}</button>
            <p style={{ margin: "18px 0 0" }}>
              <a className="link-more" href={mapLink} target="_blank" rel="noopener">{labels.open}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
