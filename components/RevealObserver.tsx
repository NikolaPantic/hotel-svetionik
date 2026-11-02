"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  ".reveal, .reveal-left, .reveal-right, .frame, .split",
  ".stack > :not(.rule, .link-list, .prose, .facts, .checklist, .contact-list, .btn-row, .chat-links, .socials, .split), .stack > .btn-row > *, .chat-links > *, .socials > *, .prose > *, .link-list > li, .contact-list > li, .facts > div, .checklist > li, .specs > li, .amenities-line > li, .menu-list > li, .menu-drinks > div, .menu-section__note, .form-grid > *, .panel > :not(form), .room-aside > :not(.facts), .duo figure > p, .album__head, .auto-reveal, .footer-grid > *, .footer-bottom, .room-detail > div > h2, .nav-panel__meta > *",
].join(", ");

/**
 * Rezerva za pregledače bez CSS scroll-driven animacija.
 * Klasa .is-in se dodaje kada element uđe u ekran i UKLANJA kada izađe ispod
 * donje ivice — animacija se tako vraća unazad pri skrolu nagore.
 * Bez JS-a (ili uz "smanji pokrete") sadržaj je odmah vidljiv.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
    });
    root.classList.add("rv-js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("is-in");
          // Ukloni samo kada je element ispod ekrana (skrol nagore) — iznad ostaje vidljiv.
          else if (e.boundingClientRect.top > 0) e.target.classList.remove("is-in");
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
