import type { StaticImageData } from "next/image";
import type { Lang } from "./routes";

// Hotel
import hotelExterior from "@/public/images/hotel/hotel-svetionik-1.jpg";
import hotelFront from "@/public/images/hotel/hotel-svetionik.jpg";
import hotelTower from "@/public/images/hotel/hotel-svetionik-5.jpg";
import hotelSide from "@/public/images/hotel/hotel-svetionik-2.jpg";
import hotelRiver from "@/public/images/hotel/hotel-svetionik-4.jpg";
import playground from "@/public/images/hotel/hotel-svetionik-playground.jpg";

// Rooms
import single1 from "@/public/images/rooms/single/single-room.jpg";
import single2 from "@/public/images/rooms/single/single-room-1.jpg";
import single3 from "@/public/images/rooms/single/single-room-bed.jpg";
import single4 from "@/public/images/rooms/single/single-room-bed-1.jpg";
import single5 from "@/public/images/rooms/single/single-room-bed-2.jpg";
import singleCard from "@/public/images/rooms/single/single-room-card.jpg";
import singleBath from "@/public/images/rooms/single/single-room-bathroom.jpg";

import double1 from "@/public/images/rooms/double/double-room.jpg";
import double2 from "@/public/images/rooms/double/double-room-1.jpg";
import double3 from "@/public/images/rooms/double/double-room-2.jpg";
import double4 from "@/public/images/rooms/double/double-room-3.jpg";
import double5 from "@/public/images/rooms/double/double-room-4.jpg";
import double6 from "@/public/images/rooms/double/double-room-5.jpg";
import doubleBed from "@/public/images/rooms/double/double-room-bed.jpg";
import doubleBed1 from "@/public/images/rooms/double/double-room-bed-1.jpg";
import doubleBed2 from "@/public/images/rooms/double/double-room-bed-2.jpg";
import doubleBed3 from "@/public/images/rooms/double/double-room-bed-3.jpg";
import doubleCard from "@/public/images/rooms/double/double-room-card.jpg";
import doubleExtra from "@/public/images/rooms/double/double-room-extra-bed.jpg";
import doubleBath from "@/public/images/rooms/double/double-room-bathroom.jpg";
import doubleBath1 from "@/public/images/rooms/double/double-room-bathroom-1.jpg";

import superior1 from "@/public/images/rooms/superior/superior-room.jpg";
import superior2 from "@/public/images/rooms/superior/superior-room-1.jpg";
import superior3 from "@/public/images/rooms/superior/superior-room-2.jpg";
import superior4 from "@/public/images/rooms/superior/superior-room-3.jpg";
import superior5 from "@/public/images/rooms/superior/superior-room-4.jpg";
import superior6 from "@/public/images/rooms/superior/superior-room-5.jpg";
import superior7 from "@/public/images/rooms/superior/superior-room-6.jpg";
import superiorBeds from "@/public/images/rooms/superior/superior-room-beds.jpg";
import superiorCard from "@/public/images/rooms/superior/superior-room-card.jpg";
import superiorBath from "@/public/images/rooms/superior/superior-room-bathroom.jpg";
import superiorBath1 from "@/public/images/rooms/superior/superior-room-bathroom-1.jpg";
import superiorBath2 from "@/public/images/rooms/superior/superior-room-bathroom-2.jpg";
import superiorBath3 from "@/public/images/rooms/superior/superior-room-bathroom-3.jpg";

// Celebrations
import banquet from "@/public/images/celebrations/banquet-hall.jpg";
import banquet1 from "@/public/images/celebrations/banquet-hall-1.jpg";
import banquet2 from "@/public/images/celebrations/banquet-hall-2.jpg";
import banquet3 from "@/public/images/celebrations/banquet-hall-3.jpg";
import banquet5 from "@/public/images/celebrations/banquet-hall-5.jpg";
import banquet7 from "@/public/images/celebrations/banquet-hall-7.jpg";
import banquet9 from "@/public/images/celebrations/banquet-hall-9.jpg";
import banquet11 from "@/public/images/celebrations/banquet-hall-11.jpg";
import banquet13 from "@/public/images/celebrations/banquet-hall-13.jpg";
import banquet15 from "@/public/images/celebrations/banquet-hall-15.jpg";
import banquetBg from "@/public/images/celebrations/banquet-hall-background.jpg";
import banquetBlack from "@/public/images/celebrations/banquet-hall-black.jpg";
import banquetBlack2 from "@/public/images/celebrations/banquet-hall-black-2.jpg";
import banquetBlack4 from "@/public/images/celebrations/banquet-hall-black-4.jpg";
import banquetBlack6 from "@/public/images/celebrations/banquet-hall-black-6.jpg";
import banquetBlack8 from "@/public/images/celebrations/banquet-hall-black-8.jpg";
import banquetBlack10 from "@/public/images/celebrations/banquet-hall-black-10.jpg";
import wedding from "@/public/images/celebrations/banquet-hall-wedding.jpg";
import wedding1 from "@/public/images/celebrations/banquet-hall-wedding-1.jpg";
import celebrationView from "@/public/images/celebrations/celebration-view.jpg";
import celebrationTable from "@/public/images/celebrations/celebration-table.jpg";
import clubHall from "@/public/images/celebrations/club-hall.jpg";
import clubHall1 from "@/public/images/celebrations/club-hall-1.jpg";
import clubHallCard from "@/public/images/celebrations/club-hall-card.jpg";
import cellarParty from "@/public/images/celebrations/wine-cellar-celebration.jpg";
import cellarParty1 from "@/public/images/celebrations/wine-cellar-celebration-1.jpg";
import cellarParty2 from "@/public/images/celebrations/wine-cellar-celebration-2.jpg";
import cellarParty3 from "@/public/images/celebrations/wine-cellar-celebration-3.jpg";

// Restaurant & food
import restInside from "@/public/images/restaurant/restaurant-inside.jpg";
import restInside1 from "@/public/images/restaurant/restaurant-inside-1.jpg";
import restInside2 from "@/public/images/restaurant/restaurant-inside-2.jpg";
import restInside3 from "@/public/images/restaurant/restaurant-inside-3.jpg";
import restInside12 from "@/public/images/restaurant/restaurant-inside-12.jpg";
import restInside13 from "@/public/images/restaurant/restaurant-inside-13.jpg";
import restOut1 from "@/public/images/restaurant/restaurant-outside-1.jpg";
import restOut2 from "@/public/images/restaurant/restaurant-outside-2.jpg";
import restOut5 from "@/public/images/restaurant/restaurant-outside-5.jpg";
import restOut7 from "@/public/images/restaurant/restaurant-outside-7.jpg";
import restOut9 from "@/public/images/restaurant/restaurant-outside-9.jpg";
import restOut10 from "@/public/images/restaurant/restaurant-outside-10.jpg";
import restOut13 from "@/public/images/restaurant/restaurant-outside-13.jpg";
import restOut15 from "@/public/images/restaurant/restaurant-outside-15.jpg";
import restOut17 from "@/public/images/restaurant/hotel-svetionik-restaurant-outside-17.jpg";
import restOut18 from "@/public/images/restaurant/restaurant-outside-18.jpg";
import waiter from "@/public/images/restaurant/hotel-svetionik-restaurant-waiter.jpg";

import fish from "@/public/images/food/food-fish.jpg";
import fish2 from "@/public/images/food/food-fish-2.jpg";
import fish4 from "@/public/images/food/food-fish-4.jpg";
import fish5 from "@/public/images/food/food-fish-5.jpg";
import fish7 from "@/public/images/food/food-fish-7.jpg";
import fish9 from "@/public/images/food/food-fish-9.jpg";
import bbq from "@/public/images/food/food-bbq.jpg";
import bbq2 from "@/public/images/food/food-bbq-2.jpg";
import breakfast from "@/public/images/food/food-breakfast.jpg";
import cake from "@/public/images/food/food-cake.jpg";
import cake3 from "@/public/images/food/food-cake-3.jpg";
import cevapcici from "@/public/images/food/food-cevapcici.jpg";
import chicken from "@/public/images/food/food-chicken.jpg";
import meat from "@/public/images/food/food-meat.jpg";
import pasta from "@/public/images/food/food-pasta.jpg";
import pasta3 from "@/public/images/food/food-pasta-3.jpg";
import rakija from "@/public/images/food/food-rakija.jpg";
import rakija3 from "@/public/images/food/food-rakija-3.jpg";
import salad from "@/public/images/food/food-salad.jpg";
import specialty from "@/public/images/food/food-specialty.jpg";
import specialty2 from "@/public/images/food/food-specialty-2.jpg";
import starter from "@/public/images/food/food-starter.jpg";
import starter2 from "@/public/images/food/food-starter-2.jpg";
import foodWine from "@/public/images/food/food-and-wine.jpg";
import foodWine3 from "@/public/images/food/food-and-wine-3.jpg";
import foodWine5 from "@/public/images/food/food-and-wine-5.jpg";
import aperol from "@/public/images/food/hotel-svetionik-restaurant-aperol.jpg";

// Wine cellar
import cellar from "@/public/images/wine-cellar/wine-cellar.jpg";
import cellar1 from "@/public/images/wine-cellar/wine-cellar-1.jpg";
import cellar3 from "@/public/images/wine-cellar/wine-cellar-3.jpg";
import cellar4 from "@/public/images/wine-cellar/wine-cellar-4.jpg";
import cellar5 from "@/public/images/wine-cellar/wine-cellar-5.jpg";
import cellar7 from "@/public/images/wine-cellar/wine-cellar-7.jpg";
import cellarEntrance from "@/public/images/wine-cellar/wine-cellar-entrance.jpg";
import cellarHall from "@/public/images/wine-cellar/wine-cellar-hall.jpg";
import cellarHall1 from "@/public/images/wine-cellar/wine-cellar-hall-1.jpg";
import cellarHall2 from "@/public/images/wine-cellar/wine-cellar-hall-2.jpg";
import cellarWall from "@/public/images/wine-cellar/wine-cellar-wall.jpg";
import cellarBench from "@/public/images/wine-cellar/wine-cellar-bench.jpg";
import cellarBottle from "@/public/images/wine-cellar/wine-cellar-wine-bottle.jpg";
import cellarDetails from "@/public/images/wine-cellar/wine-cellar-details.jpg";

// Marina
import marina from "@/public/images/boat-marina/boat-marina.jpg";
import marina1 from "@/public/images/boat-marina/boat-marina-1.jpg";
import marina2 from "@/public/images/boat-marina/boat-marina-2.jpg";
import marina3 from "@/public/images/boat-marina/boat-marina-3.jpg";
import marina4 from "@/public/images/boat-marina/boat-marina-4.jpg";
import marina5 from "@/public/images/boat-marina/boat-marina-5.jpg";

// Getting here
import driving from "@/public/images/driving.jpg";
import bus from "@/public/images/bus.jpg";

export type Pic = { src: StaticImageData; alt: Record<Lang, string> };
const p = (src: StaticImageData, sr: string, en: string): Pic => ({ src, alt: { sr, en } });

export const img = {
  hotelExterior: p(hotelExterior, "Hotel Svetionik u Obrenovcu, pogled na fasadu i dvorište", "Hotel Svetionik in Obrenovac, facade and grounds"),
  hotelFront: p(hotelFront, "Ulaz u hotel Svetionik", "Entrance to Hotel Svetionik"),
  hotelTower: p(hotelTower, "Kula svetionika iznad terase restorana", "The lighthouse tower above the restaurant terrace"),
  hotelSide: p(hotelSide, "Hotel Svetionik na obali Save", "Hotel Svetionik on the bank of the Sava"),
  hotelRiver: p(hotelRiver, "Pogled na hotel Svetionik", "View of Hotel Svetionik"),
  playground: p(playground, "Dečije igralište ispred hotela", "Children's playground in front of the hotel"),

  singleCard: p(singleCard, "Standardna soba sa francuskim ležajem", "Standard room with a double bed"),
  doubleCard: p(doubleCard, "Soba sa francuskim i dodatnim ležajem", "Room with a double bed and an extra bed"),
  superiorCard: p(superiorCard, "Superior apartman sa đakuzijem", "Superior apartment with jacuzzi"),
  superiorWide: p(superior2, "Prostrani superior apartman sa dva francuska ležaja", "Spacious superior apartment with two double beds"),

  banquetBg: p(banquetBg, "Banket sala pripremljena za venčanje", "Banquet hall prepared for a wedding"),
  banquet15: p(banquet15, "Dekoracija stola u banket sali", "Table decoration in the banquet hall"),
  banquetBlack: p(banquetBlack, "Banket sala u crno-zlatnoj dekoraciji", "Banquet hall in black and gold decor"),
  clubHall: p(clubHallCard, "Klub sala za manje proslave", "Club hall for smaller celebrations"),
  celebrationView: p(celebrationView, "Ceremonija venčanja sa pogledom na Savu", "Wedding ceremony overlooking the Sava"),
  wedding: p(wedding, "Svadbena proslava u hotelu Svetionik", "Wedding reception at Hotel Svetionik"),

  restInside12: p(restInside12, "Enterijer restorana hotela Svetionik", "Interior of the Hotel Svetionik restaurant"),
  restInside13: p(restInside13, "Postavljeni stolovi u restoranu", "Set tables in the restaurant"),
  restTerrace: p(restOut17, "Letnja bašta restorana na obali Save", "Restaurant summer garden on the Sava riverbank"),
  waiter: p(waiter, "Konobar služi goste u restoranu", "Waiter serving guests in the restaurant"),
  fish4: p(fish4, "Specijalitet od rečne ribe", "River fish speciality"),
  fish5: p(fish5, "Riba sa povrćem sa roštilja", "Fish with grilled vegetables"),
  starter: p(starter, "Domaće predjelo sa pršutom i kajmakom", "Serbian starter platter with prosciutto and kajmak"),
  breakfast: p(breakfast, "Doručak u hotelu Svetionik", "Breakfast at Hotel Svetionik"),

  cellar3: p(cellar3, "Vinski podrum sa buradima i policama vina", "Wine cellar with barrels and wine racks"),
  cellarHall1: p(cellarHall1, "Sala vinskog podruma za intimne proslave", "Wine cellar hall for intimate celebrations"),
  cellar7: p(cellar7, "Izbor vina domaćih i stranih vinarija", "Selection of wines from local and international wineries"),
  cellarEntrance: p(cellarEntrance, "Ulaz u vinski podrum", "Entrance to the wine cellar"),

  marina: p(marina, "Brodska marina hotela Svetionik na Savi", "Hotel Svetionik boat marina on the Sava"),
  marina4: p(marina4, "Plovila usidrena u marini", "Boats moored at the marina"),
  marina2: p(marina2, "Pristan za čamce ispod letnje bašte", "Boat dock below the summer garden"),

  driving: p(driving, "Dolazak automobilom do hotela", "Arriving at the hotel by car"),
  bus: p(bus, "Gradski autobus 860MV", "City bus 860MV"),
};

export const roomGalleries = {
  standardRoom: [single2, singleCard, single1, single3, single4, single5, singleBath],
  extraBedRoom: [doubleCard, double2, double4, double1, double3, double5, double6, doubleBed, doubleBed1, doubleBed2, doubleBed3, doubleExtra, doubleBath, doubleBath1],
  superiorSuite: [superior2, superiorCard, superior1, superior3, superior4, superior5, superior6, superior7, superiorBeds, superiorBath, superiorBath1, superiorBath2, superiorBath3],
} as const;

export const galleryAlbums = {
  celebrations: [banquetBg, banquetBlack, wedding, celebrationView, banquet, banquet1, banquet2, banquet3, banquet5, banquet7, banquet9, banquet11, banquet13, banquet15, banquetBlack2, banquetBlack4, banquetBlack6, banquetBlack8, banquetBlack10, wedding1, celebrationTable, clubHall, clubHall1, cellarParty, cellarParty1, cellarParty2, cellarParty3],
  restaurant: [restOut17, restInside12, restInside13, restInside, restInside1, restInside2, restInside3, restOut1, restOut2, restOut5, restOut7, restOut9, restOut10, restOut13, restOut15, restOut18, waiter, hotelTower],
  food: [fish4, fish5, starter, specialty, specialty2, fish, fish2, fish7, fish9, bbq, bbq2, meat, chicken, cevapcici, pasta, pasta3, salad, starter2, breakfast, cake, cake3, rakija, rakija3, foodWine, foodWine3, foodWine5, aperol],
  wineCellar: [cellar3, cellarHall1, cellar7, cellarEntrance, cellar, cellar1, cellar4, cellar5, cellarHall, cellarHall2, cellarWall, cellarBench, cellarBottle, cellarDetails],
  rooms: [superior2, singleCard, doubleCard, superiorCard, single1, double2, superiorBeds, singleBath, doubleBath, superiorBath],
  hotel: [hotelExterior, hotelTower, hotelFront, hotelSide, hotelRiver, playground, marina, marina1, marina3, marina4, marina5],
} as const;

export type AlbumKey = keyof typeof galleryAlbums;

/** Za klijentske komponente: bez blurDataURL. */
export const lite = (list: readonly StaticImageData[]) => list.map(({ src, width, height }) => ({ src, width, height }));
