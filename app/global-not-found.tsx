import type { Metadata } from "next";
import Link from "next/link";
import { body, sans, serif, serifItalic } from "@/lib/fonts";
import { themeScript } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Hotel Svetionik",
  robots: { index: false, follow: true },
};

/** Globalna 404 (sajt ima dva root layout-a — sr i en). */
export default function GlobalNotFound() {
  return (
    <html lang="sr" className={`${serif.variable} ${serifItalic.variable} ${body.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <main className="not-found" style={{ paddingTop: 80 }}>
          <div>
            <p className="eyebrow">404</p>
            <h1 className="title">Stranica nije pronađena</h1>
            <span className="rule" style={{ marginInline: "auto" }} />
            <p className="muted">Stranica koju tražite ne postoji ili je premeštena.</p>
            <p className="muted" lang="en">The page you are looking for does not exist or has moved.</p>
            <div className="btn-row" style={{ justifyContent: "center", marginTop: 32 }}>
              <Link className="btn btn--solid" href="/">Početna</Link>
              <Link className="btn btn--ghost" href="/en" lang="en">Home</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
