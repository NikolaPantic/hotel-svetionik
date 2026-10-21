"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Animacija pojavljivanja pri skrolu. Sadržaj je vidljiv i bez JavaScript-a:
 * klasa "reveal-on" se dodaje tek posle hidracije, a elementi koji su već
 * na ekranu odmah dobijaju .is-in (bez treptanja).
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const pending = els.filter((el) => {
      const visible = el.getBoundingClientRect().top < window.innerHeight;
      if (visible) el.classList.add("is-in");
      return !visible;
    });
    root.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
