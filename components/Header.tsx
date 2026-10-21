"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dict } from "@/content";
import { img } from "@/lib/images";
import { href, routeKeyFromPath, routes, type Lang, type RouteKey } from "@/lib/routes";
import { address, email, phones } from "@/lib/site";
import { PhoneIcon } from "./icons";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

type Props = { lang: Lang; t: Pick<Dict, "ui" | "nav"> };

const menu: { key: RouteKey; sub?: RouteKey[] }[] = [
  { key: "about" },
  { key: "rooms", sub: ["standardRoom", "extraBedRoom", "superiorSuite", "stay"] },
  { key: "celebrations", sub: ["weddings", "privateParties"] },
  { key: "restaurant", sub: ["menu"] },
  { key: "wineCellar" },
  { key: "marina" },
  { key: "gallery" },
  { key: "contact" },
];

export function Header({ lang, t }: Props) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const current = routeKeyFromPath(pathname);
  const altFor = (l: Lang) => (current ? routes[current][l] : routes.home[l]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setMenu = useCallback((value: boolean) => {
    setOpen(value);
    document.body.classList.toggle("nav-open", value);
    if (value) requestAnimationFrame(() => panelRef.current?.querySelector("a")?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setMenu]);

  return (
    <>
      <header className={`site-header${solid ? " is-solid" : ""}`}>
        <div className="container site-header__inner">
          <div className="header-left">
            <button
              ref={toggleRef}
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="site-nav"
              onClick={() => setMenu(!open)}
            >
              <span className="menu-toggle__bars" aria-hidden="true" />
              <span className="menu-toggle__label">{open ? t.ui.close : t.ui.menu}</span>
              <span className="visually-hidden">{open ? t.ui.close : t.ui.menu}</span>
            </button>
            <a className="header-phone" href={phones.booking.href}>
              <PhoneIcon />
              <span>{phones.booking.label}</span>
            </a>
          </div>

          <Link className="brand" href={href("home", lang)} aria-label={`Hotel Svetionik — ${t.ui.home}`}>
            <Logo />
          </Link>

          <div className="header-right">
            <nav className="lang" aria-label={t.ui.language}>
              <Link href={altFor("sr")} hrefLang="sr" lang="sr" aria-current={lang === "sr" ? "true" : undefined} prefetch={false}>
                SR
              </Link>
              <Link href={altFor("en")} hrefLang="en" lang="en" aria-current={lang === "en" ? "true" : undefined} prefetch={false}>
                EN
              </Link>
            </nav>
            <ThemeToggle label={t.ui.theme} />
            <Link className="btn btn--solid header-book" href={href("booking", lang)}>
              {t.ui.book}
            </Link>
          </div>
        </div>
      </header>

      <div
        className="nav-panel"
        id="site-nav"
        ref={panelRef}
        inert={!open}
        onClick={(e) => {
          // Zatvori meni kada se klikne na link (navigacija na drugu stranicu).
          if ((e.target as HTMLElement).closest("a")) setMenu(false);
        }}
      >
        <nav className="nav-panel__menu" aria-label={t.ui.menu}>
          <ul>
            {menu.map(({ key, sub }) => (
              <li key={key}>
                <Link href={href(key, lang)} aria-current={current === key ? "page" : undefined}>
                  {t.nav[key as keyof Dict["nav"]]}
                </Link>
                {sub && (
                  <ul className="nav-panel__sub">
                    {sub.map((s) => (
                      <li key={s}>
                        <Link href={href(s, lang)}>{t.nav[s as keyof Dict["nav"]]}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="nav-panel__meta">
            <span>{address.street}, {address.postalCode} {address.city}</span>
            <a href={phones.info.href}>{phones.info.label}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <span>{t.ui.hours}</span>
            <span className="lang-mobile">
              <Link href={altFor(lang === "sr" ? "en" : "sr")} hrefLang={lang === "sr" ? "en" : "sr"} className="text-link">
                {lang === "sr" ? "English" : "Srpski"}
              </Link>
            </span>
          </div>
        </nav>
        <div className="nav-panel__image">
          {open && <Image src={img.hotelTower.src} alt="" fill sizes="50vw" />}
        </div>
      </div>
    </>
  );
}
