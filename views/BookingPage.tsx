import { PageHero } from "@/components/blocks";
import { ChatLinks } from "@/components/ChatLinks";
import { BookingForm } from "@/components/forms";
import { getDict } from "@/content";
import { img } from "@/lib/images";
import type { Lang } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import { email, phones } from "@/lib/site";

export const bookingMetadata = (lang: Lang) =>
  pageMetadata(lang, "booking", getDict(lang).bookingPage);

export default function BookingPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const b = t.bookingPage;
  return (
    <>
      <PageHero lang={lang} route="booking" pic={img.superiorWide} {...b.hero} />
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="stack">
            <p className="eyebrow">{t.nav.booking}</p>
            <h2 className="title">{t.ui.enquire}</h2>
            <span className="rule" />
            <p className="muted">{t.rooms.intro[1]}</p>
            <ul className="contact-list">
              {b.aside.map(([label, key]) => {
                const p = phones[key as keyof typeof phones];
                return <li key={key}><span className="label">{label}</span><a href={p.href}>{p.label}</a></li>;
              })}
              <li><span className="label">{t.phones.email}</span><a href={`mailto:${email}`}>{email}</a></li>
            </ul>
            <ChatLinks lang={lang} />
          </div>
          <div className="panel">
            <BookingForm t={t.forms} roomLabels={[t.standardRoom.name, t.extraBedRoom.name, t.superiorSuite.name]} />
          </div>
        </div>
      </section>
    </>
  );
}
