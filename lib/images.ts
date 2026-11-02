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


export type Pic = { src: StaticImageData; alt: Record<Lang, string> };
const p = (src: StaticImageData, sr: string, en: string): Pic => ({ src, alt: { sr, en } });

export const img = {
  hotelExterior: p(hotelExterior, "Hotel Svetionik u Obrenovcu, pogled na fasadu i dvorište", "Hotel Svetionik in Obrenovac, facade and grounds"),
  hotelFront: p(hotelFront, "Ulaz u hotel Svetionik", "Entrance to Hotel Svetionik"),
  hotelTower: p(hotelTower, "Kula svetionika iznad terase restorana", "The lighthouse tower above the restaurant terrace"),
  hotelSide: p(hotelSide, "Hotel Svetionik na obali Save", "Hotel Svetionik on the bank of the Sava"),
  hotelRiver: p(hotelRiver, "Vrh kule svetionika sa vidikovcem", "Top of the lighthouse tower with its lookout"),
  playground: p(playground, "Dečije igralište ispred hotela", "Children's playground in front of the hotel"),

  singleCard: p(singleCard, "Standardna soba sa francuskim ležajem", "Standard room with a double bed"),
  doubleCard: p(doubleCard, "Soba sa francuskim i dodatnim ležajem", "Room with a double bed and an extra bed"),
  superiorCard: p(superiorCard, "Superior apartman sa đakuzijem", "Superior apartment with jacuzzi"),
  superiorWide: p(superior2, "Prostrani superior apartman sa dva francuska ležaja", "Spacious superior apartment with two double beds"),

  banquetBg: p(banquetBg, "Banket sala pripremljena za venčanje", "Banquet hall prepared for a wedding"),
  banquet15: p(banquet15, "Dekoracija stola u banket sali", "Table decoration in the banquet hall"),
  banquetBlack: p(banquetBlack, "Banket sala u crno-zlatnoj dekoraciji", "Banquet hall in black and gold decor"),
  clubHall: p(clubHallCard, "Klub sala za manje proslave", "Club hall for smaller celebrations"),
  celebrationView: p(celebrationView, "Postavka za ceremoniju venčanja sa pogledom na Savu", "Wedding ceremony setup overlooking the Sava"),
  celebrationTable: p(celebrationTable, "Mladenački sto sa cvećem i svećama", "Head table for the newlyweds with flowers and candles"),
  banquet13: p(banquet13, "Dekoracija za punoletstvo sa svetlećim brojem 18", "Coming-of-age decoration with a light-up number 18"),
  cellarParty2: p(cellarParty2, "Rođendanska proslava u vinskom podrumu sa balonima", "Birthday party in the wine cellar with balloons"),
  specialty: p(specialty, "Specijalitet kuće – mešano meso sa roštilja, pomfrit i kačkavalj", "House speciality – mixed grill with fries and cheese"),
  wedding: p(wedding, "Venčani luk sa cvećem na obali Save", "Floral wedding arch on the bank of the Sava"),

  restInside12: p(restInside12, "Enterijer restorana hotela Svetionik", "Interior of the Hotel Svetionik restaurant"),
  restInside13: p(restInside13, "Postavljeni stolovi u restoranu", "Set tables in the restaurant"),
  restTerrace: p(restOut17, "Letnja bašta restorana na obali Save", "Restaurant summer garden on the Sava riverbank"),
  waiter: p(waiter, "Konobar služi goste u restoranu", "Waiter serving guests in the restaurant"),
  fish4: p(fish4, "Specijalitet od rečne ribe", "River fish speciality"),
  fish5: p(fish5, "Riba sa povrćem sa roštilja", "Fish with grilled vegetables"),
  starter: p(starter, "Domaće predjelo sa pršutom i kajmakom", "Serbian starter platter with prosciutto and kajmak"),
  breakfast: p(breakfast, "Pohovane punjene paprike sa umakom", "Breaded stuffed peppers with dip"),

  cellar3: p(cellar3, "Vinski podrum sa buradima i policama vina", "Wine cellar with barrels and wine racks"),
  cellarHall1: p(cellarHall1, "Sala vinskog podruma za intimne proslave", "Wine cellar hall for intimate celebrations"),
  cellar7: p(cellar7, "Izbor vina domaćih i stranih vinarija", "Selection of wines from local and international wineries"),
  cellarEntrance: p(cellarEntrance, "Ulaz u vinski podrum", "Entrance to the wine cellar"),

  marina: p(marina, "Brodska marina hotela Svetionik na Savi", "Hotel Svetionik boat marina on the Sava"),
  marina4: p(marina4, "Drveni pristan na Savi", "Wooden pier on the Sava"),
  marina2: p(marina2, "Pristan za čamce ispod letnje bašte", "Boat dock below the summer garden"),

};

export const roomGalleries = {
  standardRoom: [single2, singleCard, single1, single3, single4, single5, singleBath],
  extraBedRoom: [doubleCard, double2, double4, double1, double3, double5, double6, doubleBed, doubleBed1, doubleBed2, doubleBed3, doubleExtra, doubleBath, doubleBath1],
  superiorSuite: [superior2, superiorCard, superior1, superior3, superior4, superior5, superior6, superior7, superiorBeds, superiorBath, superiorBath1, superiorBath2, superiorBath3],
} as const;

/** Albumi galerije — svaka fotografija ima opisni alt tekst (pretraga slika + pristupačnost). */
export const galleryAlbums = {
  celebrations: [
    p(banquetBg, "Banket sala sa četvrtastim stolovima, zlatnim stolicama i cvetnim aranžmanima", "Banquet hall with square tables, gold chairs and floral centrepieces"),
    p(banquetBlack, "Svečani sto sa crnim stolnjakom i zlatnim podmetačima uz pogled na Savu", "Formal table with black linen and gold chargers overlooking the Sava"),
    p(wedding, "Venčani luk sa cvećem na obali Save", "Floral wedding arch on the bank of the Sava"),
    p(celebrationView, "Postavka za ceremoniju venčanja u sali sa staklenim zidom i pogledom na reku", "Wedding ceremony setup in a glass-walled hall with a river view"),
    p(banquet, "Okrugli sto sa belim stolnjakom i tanjirima sa zlatnim rubom", "Round table with white linen and gold-rimmed plates"),
    p(banquet1, "Detalj svečane postavke: salvete, čaše i tanjiri sa zlatnim rubom", "Formal table setting detail: napkins, glasses and gold-rimmed plates"),
    p(banquet2, "Prostrana banket sala sa podijumom za igru", "Spacious banquet hall with a dance floor"),
    p(banquet3, "Pogled odozgo na sto sa cvetnim aranžmanom i zlatnim podmetačima", "Overhead view of a table with flowers and gold chargers"),
    p(banquet5, "Banket sala pripremljena za proslavu", "Banquet hall set for a celebration"),
    p(banquet7, "Stolovi sa visokim cvetnim aranžmanima u banket sali", "Tables with tall floral arrangements in the banquet hall"),
    p(banquet9, "Sala dekorisana balonima za dečiju proslavu", "Hall decorated with balloons for a children's party"),
    p(banquet11, "Foto-zid sa natpisom Happy Birthday i balonima za 18. rođendan", "Photo wall with a Happy Birthday sign and balloons for an 18th birthday"),
    p(banquet13, "Dekoracija za punoletstvo sa svetlećim brojem 18", "Coming-of-age decoration with a light-up number 18"),
    p(banquet15, "Okrugli sto sa visokim cvetnim aranžmanom pored kamenog stuba", "Round table with a tall floral centrepiece beside a stone pillar"),
    p(banquetBlack2, "Sala u crno-zlatnoj dekoraciji sa belim perjem i svećnjacima", "Hall in black and gold with white feathers and candelabras"),
    p(banquetBlack4, "Pogled odozgo na crni sto sa ružama i zlatnim priborom", "Overhead view of a black table with roses and gold cutlery"),
    p(banquetBlack6, "Detalj dekoracije sa crnim perjem i zlatnim balonima", "Decor detail with black feathers and gold balloons"),
    p(banquetBlack8, "Centralni aranžman od belog perja na crnom stolu", "White feather centrepiece on a black table"),
    p(banquetBlack10, "Okrugli crni sto sa zlatnim svećnjakom", "Round black table with a gold candelabra"),
    p(wedding1, "Venčani luk i fenjeri na obali Save", "Wedding arch and lanterns on the Sava riverbank"),
    p(celebrationTable, "Mladenački sto sa cvećem i svećama", "Head table for the newlyweds with flowers and candles"),
    p(clubHall, "Klub sala sa okruglim stolovima i cvetnim aranžmanima", "Club hall with round tables and floral arrangements"),
    p(clubHall1, "Okrugli sto u klub sali sa zlatnim stolicama", "Round table in the club hall with gold chairs"),
    p(cellarParty, "Proslava u vinskom podrumu – stolovi sa presvučenim stolicama", "Celebration in the wine cellar with dressed chairs"),
    p(cellarParty1, "Rustična sala vinskog podruma sa drvenim klupama", "Rustic wine cellar hall with wooden benches"),
    p(cellarParty2, "Rođendanska proslava u vinskom podrumu sa balonima", "Birthday party in the wine cellar with balloons"),
    p(cellarParty3, "Drveni stolovi sa kariranim stolnjacima u vinskom podrumu", "Wooden tables with checked tablecloths in the wine cellar"),
  ],
  restaurant: [
    p(restOut17, "Letnja bašta restorana sa pogledom na Savu u zalazak sunca", "Restaurant summer garden overlooking the Sava at sunset"),
    p(restInside12, "Enterijer restorana sa kaminom i tapaciranim stolicama", "Restaurant interior with a fireplace and upholstered chairs"),
    p(restInside13, "Postavljeni stolovi uz prozor u restoranu", "Set tables by the window in the restaurant"),
    p(restInside, "Sala restorana sa toplim svetlom i zavesama", "Dining room with warm light and drapes"),
    p(restInside1, "Sto uz prozor sa pogledom na reku", "Table by a window with a river view"),
    p(restInside2, "Okrugli sto i fotelje u restoranu", "Round table and armchairs in the restaurant"),
    p(restInside3, "Detalj enterijera restorana sa drvenim prozorom", "Restaurant interior detail with a wooden window"),
    p(restOut1, "Sto u letnjoj bašti uz staklenu ogradu i pogled na Savu", "Summer garden table by a glass screen overlooking the Sava"),
    p(restOut2, "Letnja bašta u zalazak sunca sa pogledom na reku", "Summer garden at sunset with a river view"),
    p(restOut5, "Pogled na zelenu obalu Save iz letnje bašte", "View of the green Sava riverbank from the summer garden"),
    p(restOut7, "Kovana ograda terase i pogled na Savu", "Wrought-iron terrace railing above the Sava"),
    p(restOut9, "Stolice na terasi pored reke", "Chairs on the riverside terrace"),
    p(restOut10, "Sto na terasi sa pogledom na vodu", "Terrace table overlooking the water"),
    p(restOut13, "Natkrivena terasa pripremljena za proslavu", "Covered terrace set for a celebration"),
    p(restOut15, "Proslava na terasi sa plavim balonima", "Terrace celebration with blue balloons"),
    p(restOut18, "Terasa sa zelenim balonima za dečiju proslavu", "Terrace with green balloons for a children's party"),
    p(waiter, "Konobar služi goste u restoranu", "Waiter serving guests in the restaurant"),
    p(hotelTower, "Kula svetionika iznad staklene terase restorana", "Lighthouse tower above the glass-walled restaurant terrace"),
  ],
  food: [
    p(fish4, "Rečna riba sa roštilja i grilovano povrće", "Grilled river fish with grilled vegetables"),
    p(fish5, "Pečena riba sa paprikama i prelivom od začinskog bilja", "Roasted fish with peppers and herb dressing"),
    p(starter, "Zakuska sa pršutom, kulenom, sirom i maslinama", "Platter of prosciutto, kulen, cheese and olives"),
    p(specialty, "Specijalitet kuće – mešano meso sa roštilja, pomfrit i kačkavalj", "House speciality – mixed grill with fries and cheese"),
    p(specialty2, "Mešano meso sa roštilja preliveno topljenim kačkavaljem", "Mixed grill topped with melted cheese"),
    p(fish, "Pastrmka sa krompir salatom i limunom", "Trout with potato salad and lemon"),
    p(fish2, "Pečena pastrmka sa blitvom i limunom", "Roasted trout with chard and lemon"),
    p(fish7, "Dimljena riba sa prelivom od začinskog bilja", "Smoked fish with herb sauce"),
    p(fish9, "Losos file sa pireom i sosovima", "Salmon fillet with mash and sauces"),
    p(bbq, "Rolovano meso sa roštilja", "Rolled meat from the grill"),
    p(bbq2, "Kobasice i meso sa roštilja sa pomfritom", "Sausages and grilled meats with fries"),
    p(meat, "Šnicla sa rendanim sirom i pečenim krompirom", "Steak topped with grated cheese and roast potatoes"),
    p(chicken, "Piletina u belom sosu sa pomfritom", "Chicken in cream sauce with fries"),
    p(cevapcici, "Ćevapi sa lukom, salatom i pekarskim krompirom", "Ćevapi with onion, salad and roast potatoes"),
    p(pasta, "Špagete karbonara", "Spaghetti carbonara"),
    p(pasta3, "Pasta u kremastom sosu", "Pasta in a creamy sauce"),
    p(salad, "Grčka salata sa fetom i maslinama", "Greek salad with feta and olives"),
    p(starter2, "Kanapei i mini sendviči za proslave", "Canapés and finger sandwiches for events"),
    p(breakfast, "Pohovane punjene paprike sa umakom", "Breaded stuffed peppers with dip"),
    p(cake, "Tufahije sa šlagom", "Tufahija – walnut-stuffed apples with cream"),
    p(cake3, "Rižoto sa povrćem", "Vegetable risotto"),
    p(rakija, "Domaća rakija u čaši", "Homemade fruit brandy"),
    p(rakija3, "Neonski natpis Hotel Svetionik i domaća rakija", "Hotel Svetionik neon sign with homemade brandy"),
    p(foodWine, "Čaša belog vina Malvazija", "Glass of Malvazija white wine"),
    p(foodWine3, "Tamjanika – belo vino", "Tamjanika white wine"),
    p(foodWine5, "Prokupac vinarije Doja – crveno vino", "Doja Prokupac red wine"),
    p(aperol, "Aperol spritz i sveža salata", "Aperol spritz with a fresh salad"),
  ],
  wineCellar: [
    p(cellar3, "Vinski podrum sa buradima i drvenim policama punim vina", "Wine cellar with barrels and wooden racks full of wine"),
    p(cellarHall1, "Sala vinskog podruma sa drvenim stolom i kovanom kapijom", "Wine cellar hall with a wooden table and wrought-iron gate"),
    p(cellar7, "Police sa vinima domaćih i stranih vinarija", "Racks of local and international wines"),
    p(cellarEntrance, "Bure sa natpisom Vinoteka Svetionik 2015", "Barrel sign reading Vinoteka Svetionik 2015"),
    p(cellar, "Hodnik vinoteke sa drvenim policama", "Wine cellar aisle with wooden racks"),
    p(cellar1, "Vinoteka osvetljena toplim svetlom", "Wine cellar in warm light"),
    p(cellar4, "Boce vina složene u police u obliku slova X", "Wine bottles stacked in X-shaped racks"),
    p(cellar5, "Police sa vinima i burad u podrumu", "Wine racks and barrels in the cellar"),
    p(cellarHall, "Sala vinskog podruma sa drvenim stolovima i klupama", "Wine cellar hall with wooden tables and benches"),
    p(cellarHall2, "Rustična sala podruma za proslave do 30 gostiju", "Rustic cellar hall for parties of up to 30"),
    p(cellarWall, "Kovani držači za vino na zidu", "Wrought-iron wine holders on the wall"),
    p(cellarBench, "Sto sa kariranim stolnjakom i drvenim klupama", "Table with a checked tablecloth and wooden benches"),
    p(cellarBottle, "Boca vina i čaša na stolu u podrumu", "Bottle of wine and a glass on a cellar table"),
    p(cellarDetails, "Kovani detalj sa motivom grožđa", "Wrought-iron grape motif"),
  ],
  rooms: [
    p(superior2, "Superior apartman sa dva francuska ležaja i sofom", "Superior apartment with two double beds and a sofa"),
    p(singleCard, "Standardna soba sa francuskim ležajem", "Standard room with a double bed"),
    p(doubleCard, "Soba sa francuskim i dodatnim ležajem", "Room with a double bed and an extra bed"),
    p(superiorCard, "Prostrani superior apartman", "Spacious superior apartment"),
    p(single1, "Standardna soba u potkrovlju sa krovnim prozorom", "Attic standard room with a skylight"),
    p(double2, "Soba sa dodatnim ležajem i sofom", "Room with an extra bed and a sofa"),
    p(superiorBeds, "Dva francuska ležaja u superior apartmanu", "Two double beds in the superior apartment"),
    p(singleBath, "Kupatilo sa tuš kabinom", "Bathroom with a shower"),
    p(doubleBath, "Moderno kupatilo sa mermernim pločicama", "Modern bathroom with marble-look tiles"),
    p(superiorBath, "Kupatilo superior apartmana sa đakuzijem", "Superior apartment bathroom with jacuzzi"),
  ],
  hotel: [
    p(hotelExterior, "Hotel Svetionik – fasada i zeleno dvorište", "Hotel Svetionik facade and lawn"),
    p(hotelTower, "Kula svetionika iznad terase restorana", "Lighthouse tower above the restaurant terrace"),
    p(hotelFront, "Ulaz u hotel Svetionik", "Entrance to Hotel Svetionik"),
    p(hotelSide, "Hotel sa kulom svetionika i baštom", "The hotel with its lighthouse tower and garden"),
    p(hotelRiver, "Vrh kule svetionika sa vidikovcem", "Top of the lighthouse tower with its lookout"),
    p(playground, "Dečije igralište ispred hotela", "Children's playground in front of the hotel"),
    p(marina, "Pristanište i obala Save kod hotela u sumrak", "Dock and riverbank by the hotel at dusk"),
    p(marina1, "Čamci privezani u marini hotela", "Boats moored at the hotel marina"),
    p(marina3, "Brod na Savi viđen sa obale kod hotela", "Barge on the Sava seen from the hotel's bank"),
    p(marina4, "Drveni pristan na Savi", "Wooden pier on the Sava"),
    p(marina5, "Kamena obala i terasa restorana iznad Save", "Stone embankment and restaurant terrace above the Sava"),
  ],
} satisfies Record<string, Pic[]>;

export type AlbumKey = keyof typeof galleryAlbums;

/** Za klijentske komponente: bez blurDataURL (manji HTML), sa alt tekstom ako postoji. */
export function lite(list: readonly (StaticImageData | Pic)[], lang?: Lang) {
  return list.map((item) => {
    const s = "alt" in item ? item.src : item;
    return { src: s.src, width: s.width, height: s.height, alt: "alt" in item && lang ? item.alt[lang] : undefined };
  });
}
