"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

export type SwapItem = { href: string; label: string; image: StaticImageData; alt: string };

type Props = {
  /** Podrazumevana slika (pre prvog hover-a). */
  image: StaticImageData;
  alt: string;
  items: SwapItem[];
  reverse?: boolean;
  arch?: boolean;
  /** Sadržaj iznad liste (natpis, naslov, tekst). */
  intro: ReactNode;
  /** Sadržaj ispod liste (dugme). */
  footer?: ReactNode;
};

/**
 * Split sekcija u kojoj prelazak mišem ili fokus tastaturom preko stavke liste
 * menja sliku u okviru (pretapanje). Ostale slike se učitavaju tek kada korisnik
 * priđe listi — početno učitavanje ostaje lagano.
 */
export function HoverFeature({ image, alt, items, reverse, arch, intro, footer }: Props) {
  const [active, setActive] = useState(-1);
  const [armed, setArmed] = useState(false);
  const arm = () => setArmed(true);

  const frameCls = ["frame", "frame--swap", reverse && "frame--deep frame--left", arch && "frame--arch"].filter(Boolean).join(" ");

  return (
    <div className={`feature${reverse ? " feature--reverse" : ""}`}>
      <div className="feature__media">
        <div className={frameCls}>
          <div className="frame__img">
            <Image
              src={image}
              alt={active === -1 ? alt : ""}
              aria-hidden={active !== -1 || undefined}
              className={active === -1 ? "is-active" : undefined}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              placeholder="blur"
            />
            {armed &&
              items.map((it, i) => (
                <Image
                  key={it.href}
                  src={it.image}
                  alt={active === i ? it.alt : ""}
                  aria-hidden={active !== i || undefined}
                  className={active === i ? "is-active" : undefined}
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="feature__text stack">
        {intro}
        <ul className="link-list" onPointerEnter={arm} onFocusCapture={arm}>
          {items.map((it, i) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className={active === i ? "is-current" : undefined}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
        {footer}
      </div>
    </div>
  );
}
