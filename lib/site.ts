export const SITE_URL = "https://www.hotelsvetionik.rs";
export const SITE_NAME = "Hotel Svetionik";

export const phones = {
  info: { href: "tel:+381643635555", label: "064 / 3635-555", e164: "+381643635555" },
  restaurant: { href: "tel:+381118755550", label: "011 / 8755-550", e164: "+381118755550" },
  booking: { href: "tel:+381691018518", label: "069 / 1018-518", e164: "+381691018518" },
} as const;

export const email = "svetionikdoo@gmail.com";
export const taxId = "106391202";
export const companyName = "Hotel Svetionik D.O.O.";

export const address = {
  street: "Zabreških partizana 30",
  postalCode: "11500",
  city: "Obrenovac",
  region: "Beograd",
  country: "RS",
} as const;

export const geo = { latitude: 44.674887, longitude: 20.190723 } as const;

export const mapLink = "https://goo.gl/maps/4wsqikzjxaRH22zQ7";
export const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.190561748924!2d20.19072301553119!3d44.67488687909958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a14e5d12a9d3d%3A0xf25f1bfe79ba3dfa!2z0KXQvtGC0LXQuyDQodCy0LXRgtC40L7QvdC40Lo!5e0!3m2!1ssr!2srs!4v1674165753674!5m2!1ssr!2srs";

export const social = {
  facebook: "https://www.facebook.com/profile.php?id=100063594339967",
  instagram: "https://www.instagram.com/svetionik_obrenovac_na_savi/",
} as const;

export const openingHours = { opens: "08:00", closes: "23:00" } as const;
export const checkIn = "12:00";
export const checkOut = "10:00";

/** EmailJS — isti servis i šabloni kao na postojećem sajtu. */
export const emailjsConfig = {
  serviceId: "contact_service",
  reservationTemplate: "reservation_template",
  contactTemplate: "contact_form",
  // Javni ključ (nije tajna); isti koji je stari sajt koristio kao rezervu.
  publicKey: process.env.NEXT_PUBLIC_FORMJS_PUBLIC_KEY || "yRSlAyjSNYF9CjZxT",
} as const;

/** Vrednosti tipa smeštaja u e-mailu ka hotelu — iste kao na starom sajtu (uvek na srpskom). */
export const ROOM_VALUES = ["standardna soba", "soba sa dodatnim ležajem", "superior apartman"] as const;

/**
 * Cene "od" (EUR po noći). Kada se upišu brojevi, prikazuju se na stranicama soba
 * i dodaju u Schema.org (priceRange / offers). null = cena se ne prikazuje.
 */
export const roomPricesEur: Record<"standardRoom" | "extraBedRoom" | "superiorSuite", number | null> = {
  standardRoom: null,
  extraBedRoom: null,
  superiorSuite: null,
};

/** Viber / WhatsApp — broj za sobe i rezervacije. Proveriti da je broj aktivan na oba servisa. */
export const messaging = {
  viber: "viber://chat?number=%2B381691018518",
  whatsapp: "https://wa.me/381691018518",
} as const;
