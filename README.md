# Hotel Svetionik — hotelsvetionik.rs

Next.js 16 (App Router, React 19, TypeScript), statički generisan sajt na srpskom i engleskom.

```bash
npm install
npm run dev     # razvoj
npm run build   # produkcijski build (sve stranice su statičke)
npm run lint
```

## Struktura

```
app/(sr)/…            srpske rute (/, /o-nama, /usluge/…) — root layout lang="sr"
app/(en)/en/…         engleske rute (/en, /en/about-us, /en/services/…) — root layout lang="en"
app/global-not-found  404 za ceo sajt
app/sitemap.ts, robots.ts, manifest.ts, icon.svg
views/                implementacija stranica (zajednička za oba jezika)
components/           header, footer, galerija, forme, blokovi
content/sr.ts, en.ts  SAV tekst sajta (izmene teksta rade se ovde)
lib/routes.ts         svi URL-ovi (sr ↔ en) na jednom mestu
lib/seo.ts            metadata + Schema.org (Hotel, HotelRoom, Restaurant, FAQ, Breadcrumbs)
lib/images.ts         izbor fotografija i albumi galerije
lib/site.ts           telefoni, adresa, koordinate, EmailJS
app/globals.css       dizajn sistem (tokeni svetle/tamne teme na vrhu)
```

## SEO
- Isti URL-ovi kao na starom sajtu; stare adrese (`/en/o-nama`, `/vesti`, `/sr/...`) trajno se preusmeravaju (`next.config.ts`).
- Svaka stranica ima svoj title, description, canonical, hreflang (sr/en/x-default), Open Graph i Twitter karticu.
- JSON-LD: `Hotel` + `EventVenue` (adresa, geo, check-in/out, sadržaji, sobe), `HotelRoom`, `Restaurant`, `FAQPage`, `BreadcrumbList`.
- `sitemap.xml` sa alternativnim jezicima i slikama.

## Forme
Rezervacija i kontakt šalju se preko EmailJS-a (isti servis i šabloni kao ranije: `contact_service`,
`reservation_template`, `contact_form`). EmailJS se učitava tek pri slanju. Javni ključ: `NEXT_PUBLIC_FORMJS_PUBLIC_KEY`.
