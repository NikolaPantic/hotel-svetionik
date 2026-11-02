"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

export type HeroWord = { href: string; label: string; image: StaticImageData; alt: string };

type Props = {
  image: StaticImageData;
  alt: string;
  words: HeroWord[];
  navLabel: string;
  /** Natpis, naslov i podnaslov (renderuje server). */
  children: ReactNode;
};

/**
 * Naslovna hero sekcija: prelazak mišem ili fokus na "Boravak / Proslave / Trpeza"
 * pretapa pozadinsku fotografiju. Dodatne fotografije se učitavaju tek kada
 * korisnik priđe rečima, pa LCP ostaje samo na glavnoj slici.
 */
export function HeroSwap({ image, alt, words, navLabel, children }: Props) {
  const [active, setActive] = useState(-1);
  const [armed, setArmed] = useState(false);
  const arm = () => setArmed(true);

  return (
    <section className="hero hero--swap" aria-labelledby="hero-title">
      <div className="hero__media">
        <Image
          src={image}
          alt={active === -1 ? alt : ""}
          aria-hidden={active !== -1 || undefined}
          className={active === -1 ? "is-active" : undefined}
          fill
          preload
          sizes="100vw"
          quality={60}
          placeholder="blur"
        />
        {armed &&
          words.map((w, i) => (
            <Image
              key={w.href}
              src={w.image}
              alt={active === i ? w.alt : ""}
              aria-hidden={active !== i || undefined}
              className={active === i ? "is-active" : undefined}
              fill
              sizes="100vw"
              quality={60}
            />
          ))}
      </div>
      <div className="container hero__content">
        {children}
        <nav aria-label={navLabel}>
          <ul className="hero__words" onPointerEnter={arm} onFocusCapture={arm} onPointerLeave={() => setActive(-1)}>
            {words.map((w, i) => (
              <li key={w.href}>
                <Link
                  href={w.href}
                  className={active === i ? "is-current" : undefined}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(-1)}
                >
                  {w.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <span className="hero__scroll" aria-hidden="true" />
    </section>
  );
}
