import { PageHero } from "@/components/blocks";
import { ChatLinks } from "@/components/ChatLinks";
import { ContactForm } from "@/components/forms";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { MapEmbed } from "@/components/MapEmbed";
import { getDict } from "@/content";
import { img } from "@/lib/images";
import type { Lang } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { address, email, mapLink, phones, social } from "@/lib/site";

export const contactMetadata = (lang: Lang) =>
  pageMetadata(lang, "contact", getDict(lang).contactPage);

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const c = t.contactPage;
  return (
    <>
      <PageHero lang={lang} route="contact" pic={img.hotelRiver} {...c.hero} />
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">{t.nav.contact}</p>
            <h2 className="title">Hotel Svetionik</h2>
            <span className="rule" />
            <ul className="contact-list">
              <li>
                <span className="label">{t.phones.address}</span>
                <a href={mapLink} target="_blank" rel="noopener">{address.street}, {address.postalCode} {address.city}</a>
              </li>
              <li><span className="label">{t.phones.booking}</span><a href={phones.booking.href}>{phones.booking.label}</a></li>
              <li><span className="label">{t.phones.restaurant}</span><a href={phones.restaurant.href}>{phones.restaurant.label}</a></li>
              <li><span className="label">{t.phones.info}</span><a href={phones.info.href}>{phones.info.label}</a></li>
              <li><span className="label">{t.phones.email}</span><a href={`mailto:${email}`}>{email}</a></li>
              <li><span className="label">{c.hoursLabel}</span><strong>{t.ui.hours}</strong></li>
            </ul>
            <ChatLinks lang={lang} />
            <div className="socials" style={{ color: "var(--ink)" }}>
              <a href={social.facebook} target="_blank" rel="noopener" aria-label="Facebook" style={{ borderColor: "var(--line)" }}><FacebookIcon /></a>
              <a href={social.instagram} target="_blank" rel="noopener" aria-label="Instagram" style={{ borderColor: "var(--line)" }}><InstagramIcon /></a>
            </div>
          </div>
          <div className="panel reveal">
            <h2 className="title title--sm">{c.formTitle}</h2>
            <p className="muted" style={{ margin: "14px 0 18px" }}>{c.formText}</p>
            <ContactForm t={t.forms} />
          </div>
        </div>
      </section>
      <section className="section section--alt section--tight">
        <div className="container">
          <MapEmbed labels={{ show: t.ui.showMap, note: t.ui.mapNote, title: t.ui.mapTitle, open: t.ui.openMap }} />
        </div>
      </section>
    </>
  );
}
