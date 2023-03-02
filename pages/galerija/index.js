import PageLayout from "../../layout/PageLayout/PageLayout";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import food from "../../public/images/food.jpg";
import gallery from "../../assets/images//gallery.jpg";

import restaurant1 from "../../public/images/restaurant/restaurant-inside-3.jpg";
import restaurant2 from "../../public/images/restaurant/restaurant-inside-2.jpg";
import restaurant3 from "../../public/images/restaurant/restaurant-inside-1.jpg";
import restaurant4 from "../../public/images/restaurant/restaurant-inside-4.jpg";
import restaurant5 from "../../public/images/restaurant/restaurant-inside-6.jpg";
import restaurant6 from "../../public/images/restaurant/restaurant-inside-7.jpg";
import restaurant7 from "../../public/images/restaurant/restaurant-inside-11.jpg";
import restaurant8 from "../../public/images/restaurant/restaurant-outside-1.jpg";
import restaurant9 from "../../public/images/restaurant/restaurant-outside-3.jpg";
import restaurant10 from "../../public/images/restaurant/restaurant-outside-2.jpg";
import restaurant11 from "../../public/images/restaurant/restaurant-outside-5.jpg";
import restaurant12 from "../../public/images/restaurant/restaurant-outside-7.jpg";
import restaurant13 from "../../public/images/restaurant/restaurant-outside-9.jpg";
import restaurant14 from "../../public/images/restaurant/restaurant-outside-10.jpg";
import restaurant16 from "../../public/images/restaurant/restaurant-outside-13.jpg";
import restaurant17 from "../../public/images/restaurant/restaurant-outside-menu.jpg";
import restaurant18 from "../../public/images/restaurant/restaurant-outside-view-2.jpg";
import restaurant19 from "../../public/images/restaurant/restaurant-outside-15.jpg";
import restaurant21 from "../../public/images/restaurant/restaurant-outside-3.jpg";
import restaurant22 from "../../public/images/restaurant/restaurant-outside-11.jpg";

import wineCellar1 from "../../public/images/wine-cellar/wine-cellar.jpg";
import wineCellar2 from "../../public/images/wine-cellar/wine-cellar-entrance.jpg";
import wineCellar3 from "../../public/images/wine-cellar/wine-cellar-hall-1.jpg";
import wineCellar4 from "../../public/images/wine-cellar/wine-cellar-1.jpg";
import wineCellar6 from "../../public/images/wine-cellar/wine-cellar-3.jpg";
import wineCellar7 from "../../public/images/wine-cellar/wine-cellar-4.jpg";
import wineCellar8 from "../../public/images/wine-cellar/wine-cellar-5.jpg";
import wineCellar10 from "../../public/images/wine-cellar/wine-cellar-hall-2.jpg";
import wineCellar11 from "../../public/images/wine-cellar/wine-cellar-wall.jpg";
import wineCellar12 from "../../public/images/wine-cellar/wine-cellar-wall-1.jpg";
import wineCellar13 from "../../public/images/wine-cellar/wine-cellar-bench.jpg";
import wineCellar14 from "../../public/images/wine-cellar/wine-cellar-wine-bottle.jpg";

import roomImage1 from "../../public/images/rooms/single/single-room-card.jpg";
import roomImage2 from "../../public/images/rooms/single/single-room.jpg";
import roomImage3 from "../../public/images/rooms/single/single-room-1.jpg";
import roomImage4 from "../../public/images/rooms/single/single-room-bed.jpg";
import roomImage5 from "../../public/images/rooms/single/single-room-bathroom.jpg";
import roomImage6 from "../../public/images/rooms/double/double-room-card.jpg";
import roomImage7 from "../../public/images/rooms/double/double-room.jpg";
import roomImage8 from "../../public/images/rooms/double/double-room-1.jpg";
import roomImage9 from "../../public/images/rooms/double/double-room-bed.jpg";
import roomImage10 from "../../public/images/rooms/double/double-room-bathroom.jpg";
import roomImage11 from "../../public/images/rooms/superior/superior-room-card.jpg";
import roomImage12 from "../../public/images/rooms/superior/superior-room-3.jpg";
import roomImage13 from "../../public/images/rooms/superior/superior-room-beds.jpg";
import roomImage14 from "../../public/images/rooms/superior/superior-room-bathroom.jpg";
import roomImage15 from "../../public/images/rooms/superior/superior-room-bathroom-2.jpg";
import Head from "next/head";

import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Gallery = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const images = [food, food, food];

  const restaurantImages = [
    restaurant1,
    restaurant2,
    restaurant3,
    restaurant4,
    restaurant5,
    restaurant6,
    restaurant7,
    restaurant8,
    restaurant9,
    restaurant10,
    restaurant11,
    restaurant12,
    restaurant13,
    restaurant14,
    restaurant16,
    restaurant17,
    restaurant18,
    restaurant19,
    restaurant21,
    restaurant22,
  ];

  const wineCellarImages = [
    wineCellar1,
    wineCellar2,
    wineCellar3,
    wineCellar4,
    wineCellar6,
    wineCellar7,
    wineCellar8,
    wineCellar10,
    wineCellar11,
    wineCellar12,
    wineCellar13,
    wineCellar14,
  ];

  const roomsImages = [
    roomImage1,
    roomImage2,
    roomImage3,
    roomImage4,
    roomImage5,
    roomImage6,
    roomImage7,
    roomImage8,
    roomImage9,
    roomImage10,
    roomImage11,
    roomImage12,
    roomImage13,
    roomImage14,
    roomImage15,
  ];

  return (
    <>
      <Head>
        <title>Galerija | Hotel Svetionik Obrenovac</title>
        <meta name="title" content="Galerija | Hotel Svetionik Obrenovac" />
        <meta name="description" content="Galerija slika hotela Obrenovac." />
        <meta
          name="keywords"
          content="galerija, slike, slike hotel, slike reka"
        />
        <meta
          property="og:title"
          content="Galerija | Hotel Svetionik Obrenovac"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content="Galerija slika hotela Svetionik Obrenovac."
        />
      </Head>
      <article className="pagegallery">
        <PageLayout
          heading={t.common.gallery}
          backgroundImageUrl={gallery}
          pageLayoutSummary={t.pages.gallery.subheading}
        >
          <section className="pagegallery__album" id="restoran">
            <h3 className="heading-small">
              {t.common.restaurantAndSummerGarden}
            </h3>
            <div className="pagegallery__album--carousel">
              <Carousel
                images={restaurantImages}
                shouldMaximizeOnClick={true}
              />
            </div>
          </section>
          <section className="pagegallery__album" id="sobe">
            <h3 className="heading-small">{t.common.rooms}</h3>
            <div className="pagegallery__album--carousel">
              <Carousel images={roomsImages} shouldMaximizeOnClick={true} />
            </div>
          </section>
          <section className="pagegallery__album" id="#proslave">
            <h3 className="heading-small">{t.common.weddingCelebrations}</h3>
            <div className="pagegallery__album--carousel">
              <Carousel
                images={images}
                shouldMaximizeOnClick={true}
                shouldLazyLoad={false}
              />
            </div>
          </section>
          <section className="pagegallery__album" id="hrana">
            <h3 className="heading-small">{t.common.food}</h3>
            <div className="pagegallery__album--carousel">
              <Carousel images={images} shouldMaximizeOnClick={true} />
            </div>
          </section>
          <section className="pagegallery__album" id="vinski-podrum">
            <h3 className="heading-small">{t.common.wineCellar}</h3>
            <div className="pagegallery__album--carousel">
              <Carousel
                images={wineCellarImages}
                shouldMaximizeOnClick={true}
              />
            </div>
          </section>
          <section className="pagegallery__album" id="nagrade">
            <h3 className="heading-small">{t.common.awards}</h3>
            <div className="pagegallery__album--carousel">
              <Carousel images={images} shouldMaximizeOnClick={true} />
            </div>
          </section>
        </PageLayout>
      </article>
    </>
  );
};

export default Gallery;
