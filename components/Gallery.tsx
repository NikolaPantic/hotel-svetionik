"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/** Minimalni podaci o slici za klijent (bez blurDataURL — manji HTML). */
export type LiteImage = { src: string; width: number; height: number };

type Props = {
  images: readonly LiteImage[];
  alt: string;
  mosaic?: boolean;
  limit?: number;
  labels: { close: string; prev: string; next: string; photo: string; of: string };
};

export function Gallery({ images, alt, mosaic, limit, labels }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const shown = limit ? images.slice(0, limit) : images;

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const go = useCallback(
    (step: number) => setIndex((i) => (i + step + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (!d.open) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go]);

  // Swipe na telefonu
  const touchX = useRef<number | null>(null);

  const caption = `${alt} — ${labels.photo} ${index + 1} ${labels.of} ${images.length}`;

  return (
    <>
      <div className={`gallery${mosaic ? " gallery--mosaic" : ""}`}>
        {shown.map((src, i) => (
          <button
            type="button"
            className="gallery__item reveal"
            key={src.src}
            onClick={() => open(i)}
            aria-label={`${alt} — ${labels.photo} ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} — ${labels.photo} ${i + 1}`}
              fill
              sizes={mosaic && i === 0 ? "(max-width: 860px) 100vw, 50vw" : "(max-width: 860px) 50vw, 25vw"}
              quality={60}
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={alt}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="lightbox__top">
          <span>{index + 1} / {images.length}</span>
          <button type="button" onClick={() => dialog.current?.close()} aria-label={labels.close}>×</button>
        </div>
        <div className="lightbox__stage">
          <button type="button" className="lightbox__prev" onClick={() => go(-1)} aria-label={labels.prev}>‹</button>
          <Image src={images[index]} alt={caption} fill sizes="100vw" quality={75} />
          <button type="button" className="lightbox__next" onClick={() => go(1)} aria-label={labels.next}>›</button>
        </div>
        <p className="lightbox__caption">{caption}</p>
      </dialog>
    </>
  );
}
