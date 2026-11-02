"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Svi elementi koji imaju animaciju ulaska (mora da se poklapa sa globals.css). */
const SELECTOR = [
  ".reveal, .reveal-left, .reveal-right, .frame, .split-title, .rule",
  ".stack > :not(.rule, .link-list, .prose, .facts, .checklist, .contact-list, .btn-row, .chat-links, .socials, .split-title)",
  ".stack > .btn-row > *, .chat-links > *, .socials > *",
  ".prose > *, .link-list > li, .contact-list > li, .facts > div, .checklist > li, .specs > li",
  ".amenities-line > li, .menu-list > li, .menu-drinks > div, .menu-section__note",
  ".form-grid > *, .panel > :not(form), .room-aside > :not(.facts)",
  ".duo figure > p, .album__head, .auto-reveal",
  ".footer-grid > *, .footer-bottom, .room-detail > div > h2",
].join(", ");

const STEP = 80; // ms između elemenata koji uđu zajedno
const MAX_STEPS = 8;

/**
 * Animacije ulaska: element dobija .is-in čim uđe u ekran (punu, vremenski
 * vođenu animaciju), a gubi je kada izađe ispod donje ivice — pri skrolu
 * nagore animacija se vraća unazad. Elementi koji uđu zajedno dobijaju
 * kaskadno kašnjenje (--rd) po redosledu na ekranu.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("rv-js") || !("IntersectionObserver" in window)) {
      root.classList.remove("rv-js");
      return;
    }
    root.classList.add("rv-ready");

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting && !e.target.classList.contains("is-in"))
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        entering.forEach((e, i) => {
          const el = e.target as HTMLElement;
          el.style.setProperty("--rd", `${Math.min(i, MAX_STEPS) * STEP}ms`);
          el.classList.add("is-in");
        });
        for (const e of entries) {
          // Izlazak ispod ekrana (skrol nagore) → animacija unazad, bez kašnjenja.
          if (!e.isIntersecting && e.boundingClientRect.top > 0 && e.target.classList.contains("is-in")) {
            (e.target as HTMLElement).style.setProperty("--rd", "0ms");
            e.target.classList.remove("is-in");
          }
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
