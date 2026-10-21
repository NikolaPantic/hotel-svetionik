// Generiše Open Graph slike 1200×630 (public/og/<ruta>.jpg) za deljenje na mrežama.
// Pokretanje: npm run og  (potrebno samo kada se promeni izbor fotografija)
import { mkdirSync, readFileSync } from "node:fs";
import sharp from "sharp";

const W = 1200;
const H = 630;
const img = (p) => `public/images/${p}`;

/** Ruta → fotografija (ključevi isti kao u lib/routes.ts). */
const sources = {
  home: img("hotel/hotel-svetionik-1.jpg"),
  about: img("hotel/hotel-svetionik.jpg"),
  services: img("celebrations/banquet-hall-black.jpg"),
  rooms: img("rooms/superior/superior-room-1.jpg"),
  standardRoom: img("rooms/single/single-room-card.jpg"),
  extraBedRoom: img("rooms/double/double-room-card.jpg"),
  superiorSuite: img("rooms/superior/superior-room-1.jpg"),
  celebrations: img("celebrations/banquet-hall-background.jpg"),
  restaurant: img("restaurant/hotel-svetionik-restaurant-outside-17.jpg"),
  wineCellar: img("wine-cellar/wine-cellar-3.jpg"),
  marina: img("boat-marina/boat-marina.jpg"),
  gallery: img("celebrations/banquet-hall-black.jpg"),
  contact: img("hotel/hotel-svetionik.jpg"),
  booking: img("rooms/superior/superior-room-1.jpg"),
  menu: img("food/food-specialty.jpg"),
  weddings: img("celebrations/banquet-hall-wedding.jpg"),
  privateParties: img("celebrations/banquet-hall-13.jpg"),
  stay: img("hotel/hotel-svetionik-2.jpg"),
};

const logoSvg = readFileSync("public/svg/hotel-svetionik-logo-white.svg");
const logo = await sharp(logoSvg).resize({ width: 150 }).png().toBuffer();
const { height: logoH } = await sharp(logo).metadata();
const blockW = 190;
const blockH = logoH + 56;
const block = await sharp({
  create: { width: blockW, height: blockH, channels: 4, background: "#5e1828" },
})
  .composite([{ input: logo, top: 28, left: (blockW - 150) / 2 }])
  .png()
  .toBuffer();

const shade = Buffer.from(
  `<svg width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0a0708" stop-opacity="0.45"/><stop offset="0.35" stop-color="#0a0708" stop-opacity="0"/>
    <stop offset="0.7" stop-color="#0a0708" stop-opacity="0"/><stop offset="1" stop-color="#0a0708" stop-opacity="0.35"/>
  </linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`,
);

mkdirSync("public/og", { recursive: true });
for (const [key, file] of Object.entries(sources)) {
  await sharp(file)
    .resize(W, H, { fit: "cover", position: "attention" })
    .composite([{ input: shade }, { input: block, top: 0, left: Math.round((W - blockW) / 2) }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`public/og/${key}.jpg`);
  console.log("✓", key);
}
