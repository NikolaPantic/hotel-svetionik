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

## Sadržaj koji se popunjava kasnije
- **Google recenzije** — Places API (New): env `GOOGLE_PLACES_API_KEY` i `GOOGLE_PLACE_ID` (samo server).
  Bez njih se prikazuje placeholder; podaci se keširaju 1h.
- **Instagram** — Instagram API: env `INSTAGRAM_ACCESS_TOKEN` (dugotrajni token, obnoviti na 60 dana).
  Bez tokena placeholder sa fotografijama hotela koje vode na profil.
- **Paketi i priznanja** — `content/offers.ts`; sekcije se pojavljuju na naslovnoj kad se upiše bar jedna stavka.
- **Cene „od“** — `roomPricesEur` u `lib/site.ts` (EUR po noći). Kada se upišu, prikazuju se na stranicama soba
  i dodaju u Schema.org (`priceRange`, `offers`).
- **Viber / WhatsApp** — `messaging` u `lib/site.ts` (trenutno 069 / 1018-518).
- **Jelovnik** — `content/menu.ts` (prepisan iz PDF-a, bez cena; cena se upisuje kao `price` u RSD).

## OG slike
`npm run og` generiše slike 1200×630 za deljenje na mrežama u `public/og/` (fotografije se biraju u `scripts/generate-og.mjs`).

## Forme
Rezervacija i kontakt šalju se preko EmailJS-a (isti servis i šabloni kao ranije: `contact_service`,
`reservation_template`, `contact_form`). EmailJS se učitava tek pri slanju. Javni ključ: `NEXT_PUBLIC_FORMJS_PUBLIC_KEY`.
