import Head from "next/head";
import PageLayout from "../../layout/PageLayout/PageLayout";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import food from "../../public/images/food.jpg";
import gallery from "../../public/images/gallery.jpg";

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
import wineCellar15 from "../../public/images/celebrations/wine-cellar-celebration-5.jpg";
import wineCellar16 from "../../public/images/celebrations/wine-cellar-celebration-4.jpg";

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

import foodImage from "../../public/images/food/food-salad.jpg";
import foodImage1 from "../../public/images/food/food-salad-2.jpg";
import foodImage2 from "../../public/images/food/food-sandwich.jpg";
import foodImage3 from "../../public/images/food/food-sandwich-2.jpg";
import foodImage4 from "../../public/images/food/food-breakfast.jpg";
import foodImage5 from "../../public/images/food/food-specialty.jpg";
import foodImage6 from "../../public/images/food/food-specialty-2.jpg";
import foodImage7 from "../../public/images/food/food-specialty-3.jpg";
import foodImage8 from "../../public/images/food/food-fish.jpg";
import foodImage9 from "../../public/images/food/food-fish-2.jpg";
import foodImage10 from "../../public/images/food/food-fish-3.jpg";
import foodImage11 from "../../public/images/food/food-pasta.jpg";
import foodImage12 from "../../public/images/food/food-pasta-2.jpg";
import foodImage13 from "../../public/images/food/food-cevapcici.jpg";
import foodImage14 from "../../public/images/food/food-chicken.jpg";
import foodImage15 from "../../public/images/food/food-meat.jpg";
import foodImage16 from "../../public/images/food/food-cake.jpg";
import foodImage17 from "../../public/images/food/food-and-wine.jpg";
import foodImage18 from "../../public/images/food/food-and-wine-2.jpg";
import foodImage19 from "../../public/images/food/food-and-wine-3.jpg";
import foodImage20 from "../../public/images/food/food-and-wine-4.jpg";
import foodImage21 from "../../public/images/food/food-and-wine-5.jpg";
import foodImage22 from "../../public/images/food/food-and-wine-6.jpg";
import foodImage23 from "../../public/images/food/food-and-wine-7.jpg";
import foodImage24 from "../../public/images/food/food-and-wine-8.jpg";
import foodImage25 from "../../public/images/food/food-rakija.jpg";
import foodImage26 from "../../public/images/food/food-rakija-2.jpg";

import celebrationsImage from "../../public/images/celebrations/banquet-hall.jpg";
import celebrationsImage1 from "../../public/images/celebrations/banquet-hall-1.jpg";
import celebrationsImage2 from "../../public/images/celebrations/banquet-hall-2.jpg";
import celebrationsImage3 from "../../public/images/celebrations/banquet-hall-3.jpg";
import celebrationsImage4 from "../../public/images/celebrations/banquet-hall-5.jpg";
import celebrationsImage5 from "../../public/images/celebrations/banquet-hall-6.jpg";
import celebrationsImage6 from "../../public/images/celebrations/banquet-hall-7.jpg";
import celebrationsImage7 from "../../public/images/celebrations/banquet-hall-8.jpg";
import celebrationsImage8 from "../../public/images/celebrations/banquet-hall-9.jpg";
import celebrationsImage9 from "../../public/images/celebrations/banquet-hall-10.jpg";
import celebrationsImage10 from "../../public/images/celebrations/banquet-hall-11.jpg";
import celebrationsImage11 from "../../public/images/celebrations/banquet-hall-12.jpg";
import celebrationsImage12 from "../../public/images/celebrations/banquet-hall-13.jpg";
import celebrationsImage13 from "../../public/images/celebrations/banquet-hall-wedding.jpg";
import celebrationsImage14 from "../../public/images/celebrations/banquet-hall-wedding-1.jpg";
import celebrationsImage15 from "../../public/images/celebrations/club-hall.jpg";
import celebrationsImage16 from "../../public/images/celebrations/club-hall-1.jpg";
import celebrationsImage17 from "../../public/images/celebrations/wine-cellar-celebration.jpg";
import celebrationsImage18 from "../../public/images/celebrations/wine-cellar-celebration-1.jpg";
import celebrationsImage19 from "../../public/images/celebrations/wine-cellar-celebration-2.jpg";
import celebrationsImage20 from "../../public/images/celebrations/wine-cellar-celebration-3.jpg";
import celebrationsImage21 from "../../public/images/celebrations/wine-cellar-celebration-6.jpg";

import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Gallery = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const images = [food, food, food];

  const foodImages = [
    foodImage,
    foodImage1,
    foodImage2,
    foodImage3,
    foodImage4,
    foodImage5,
    foodImage6,
    foodImage7,
    foodImage8,
    foodImage9,
    foodImage10,
    foodImage11,
    foodImage12,
    foodImage13,
    foodImage14,
    foodImage15,
    foodImage16,
    foodImage17,
    foodImage18,
    foodImage19,
    foodImage20,
    foodImage21,
    foodImage22,
    foodImage23,
    foodImage24,
    foodImage25,
    foodImage26,
  ];

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
    wineCellar15,
    wineCellar16,
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

  const celebrationsImages = [
    celebrationsImage,
    celebrationsImage1,
    celebrationsImage2,
    celebrationsImage3,
    celebrationsImage4,
    celebrationsImage5,
    celebrationsImage6,
    celebrationsImage7,
    celebrationsImage8,
    celebrationsImage9,
    celebrationsImage10,
    celebrationsImage11,
    celebrationsImage12,
    celebrationsImage13,
    celebrationsImage14,
    celebrationsImage15,
    celebrationsImage16,
    celebrationsImage17,
    celebrationsImage18,
    celebrationsImage19,
    celebrationsImage20,
    celebrationsImage21,
  ];

  return (
    <>
      <Head>
        <title>{t.metadata.gallery.title}</title>
        <meta name="title" content={t.metadata.gallery.title} />
        <meta name="description" content={t.metadata.gallery.description} />
        <meta name="keywords" content="galerija, slike, slike hotel" />
        <meta property="og:title" content={t.metadata.gallery.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.gallery.description}
        />
      </Head>
      <article className="pagegallery">
        <PageLayout
          heading={t.common.gallery}
          backgroundImageUrl={gallery}
          pageLayoutSummary={t.pages.gallery.subheading}
        >
          <section className="pagegallery__album" id="proslave">
            <h2 className="heading-small">{t.common.weddingCelebrations}</h2>
            <div className="pagegallery__album--carousel">
              <Carousel
                images={celebrationsImages}
                shouldMaximizeOnClick={true}
                shouldLazyLoad={false}
              />
            </div>
          </section>
          <section className="pagegallery__album" id="restoran">
            <h2 className="heading-small">
              {t.common.restaurantAndSummerGarden}
            </h2>
            <div className="pagegallery__album--carousel">
              <Carousel
                images={restaurantImages}
                shouldMaximizeOnClick={true}
              />
            </div>
          </section>

          <section className="pagegallery__album" id="hrana">
            <h2 className="heading-small">{t.common.food}</h2>
            <div className="pagegallery__album--carousel">
              <Carousel images={foodImages} shouldMaximizeOnClick={true} />
            </div>
          </section>
          <section className="pagegallery__album" id="vinski-podrum">
            <h2 className="heading-small">{t.common.wineCellar}</h2>
            <div className="pagegallery__album--carousel">
              <Carousel
                images={wineCellarImages}
                shouldMaximizeOnClick={true}
              />
            </div>
          </section>
          <section className="pagegallery__album" id="sobe">
            <h2 className="heading-small">{t.common.rooms}</h2>
            <div className="pagegallery__album--carousel">
              <Carousel images={roomsImages} shouldMaximizeOnClick={true} />
            </div>
          </section>
          {/* <section className="pagegallery__album" id="nagrade">
            <h2 className="heading-small">{t.common.awards}</h2>
            <div className="pagegallery__album--carousel">
              <Carousel images={images} shouldMaximizeOnClick={true} />
            </div>
          </section> */}
        </PageLayout>
      </article>
    </>
  );
};

export default Gallery;
