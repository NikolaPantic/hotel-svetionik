import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getDict } from "@/content";
import { sans, serif, serifItalic } from "@/lib/fonts";
import type { Lang } from "@/lib/routes";
import { graph, hotelSchema, websiteSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { themeScript } from "@/lib/theme";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { JsonLd } from "./JsonLd";
import { LogoSymbol } from "./Logo";
import { RevealObserver } from "./RevealObserver";

export const shellMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Hotel Svetionik",
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  other: { "geo.region": "RS-00", "geo.placename": "Obrenovac" },
};

export const shellViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#110f10" },
  ],
};

export function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = getDict(lang);
  return (
    <html lang={lang} className={`${serif.variable} ${serifItalic.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <LogoSymbol />
        <a className="skip-link" href="#main">{t.ui.skip}</a>
        <Header lang={lang} t={{ ui: t.ui, nav: t.nav }} />
        <main id="main">{children}</main>
        <Footer lang={lang} t={t} />
        <RevealObserver />
        <JsonLd data={graph(websiteSchema(lang), hotelSchema(lang))} />
      </body>
    </html>
  );
}
