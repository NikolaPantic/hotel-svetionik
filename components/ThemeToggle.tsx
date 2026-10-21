"use client";

import { THEME_KEY } from "@/lib/theme";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  };

  return (
    <button className="theme-toggle" type="button" aria-label={label} title={label} onClick={toggle}>
      <MoonIcon />
      <SunIcon />
    </button>
  );
}
