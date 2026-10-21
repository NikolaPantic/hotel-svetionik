import Link from "next/link";
import type { Dict } from "@/content";
import { href, type Lang, type RouteKey } from "@/lib/routes";
import { address, companyName, email, phones, social, taxId } from "@/lib/site";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "./icons";
import { Logo } from "./Logo";

const explore: RouteKey[] = ["about", "rooms", "stay", "celebrations", "weddings", "privateParties", "restaurant", "menu", "wineCellar", "marina", "gallery", "contact", "booking"];

export function Footer({ lang, t }: { lang: Lang; t: Dict }) {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href={href("home", lang)} aria-label="Hotel Svetionik">
                <Logo className="footer-brand" />
              </Link>
              <p style={{ margin: 0, maxWidth: 320 }}>{t.footer.about}</p>
            </div>
            <nav aria-label={t.footer.explore}>
              <h2>{t.footer.explore}</h2>
              <ul>
                {explore.map((k) => (
                  <li key={k}>
                    <Link href={href(k, lang)}>{t.nav[k as keyof Dict["nav"]]}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2>{t.footer.contact}</h2>
              <address>
                {address.street}
                <br />
                {address.postalCode} {address.city}, {lang === "sr" ? "Srbija" : "Serbia"}
                <br />
                <br />
                <a href={phones.info.href}>{phones.info.label}</a>
                <br />
                <a href={phones.restaurant.href}>{phones.restaurant.label}</a>
                <br />
                <a href={phones.booking.href}>{phones.booking.label}</a>
                <br />
                <a href={`mailto:${email}`}>{email}</a>
              </address>
            </div>
            <div>
              <h2>{t.footer.follow}</h2>
              <p style={{ margin: 0 }}>{t.ui.hours}</p>
              <div className="socials">
                <a href={social.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
                <a href={social.instagram} target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon /></a>
                <a href={`mailto:${email}`} aria-label={t.phones.email}><MailIcon /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {companyName} · {t.footer.taxId} {taxId}. {t.footer.rights}
            </span>
            <Link href={href("home", lang === "sr" ? "en" : "sr")} hrefLang={lang === "sr" ? "en" : "sr"}>
              {lang === "sr" ? "English version" : "Srpska verzija"}
            </Link>
          </div>
        </div>
      </footer>

      <nav className="action-bar" aria-label={t.ui.quickActions}>
        <a href={phones.booking.href}><PhoneIcon />{t.ui.call}</a>
        <a href="https://goo.gl/maps/4wsqikzjxaRH22zQ7" target="_blank" rel="noopener"><PinIcon />{t.ui.map}</a>
        <Link href={href("booking", lang)}>{t.ui.bookShort}</Link>
      </nav>
    </>
  );
}
