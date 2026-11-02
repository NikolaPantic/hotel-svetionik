"use client";

import { useEffect, useRef } from "react";

/**
 * Broj koji odbrojava kada uđe u ekran i vraća se na nulu kada izađe ispod
 * (reverzibilno). Server renderuje konačnu vrednost — SEO i čitači ekrana
 * uvek dobijaju tačan broj.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const m = value.match(/^(\d+)(.*)$/);
    if (!el || !m || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = Number(m[1]);
    const suffix = m[2];
    let raf = 0;

    const run = (from: number, to: number) => {
      cancelAnimationFrame(raf);
      const start = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${Math.round(from + (to - from) * eased)}${suffix}`;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) run(0, target);
      else if (e.boundingClientRect.top > 0) {
        cancelAnimationFrame(raf);
        el.textContent = `0${suffix}`;
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <strong>
      <span ref={ref} aria-hidden="true">{value}</span>
      <span className="visually-hidden">{value}</span>
    </strong>
  );
}
