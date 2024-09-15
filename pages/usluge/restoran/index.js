import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ServiceLayout from "../../../layout/ServiceLayout/ServiceLayout";
import NavigationButton from "../../../components/NavigationButton/NavigationButton";
import food from "../../../public/images/food/food-cevapcici-medium.jpg";
import food2 from "../../../public/images/food/food-fish-4.jpg";
import food3 from "../../../public/images/food/food-fish-9.jpg";
import food4 from "../../../public/images/food/food-specialty.jpg";
import food5 from "../../../public/images/food/food-pasta-2.jpg";
import food6 from "../../../public/images/food/food-fish-9.jpg";
import restaurantOutside2 from "../../../public/images/restaurant/hotel-svetionik-restaurant-waiter.jpg";
import restaurantOutside3 from "../../../public/images/restaurant/restaurant-outside-16.jpg";
import foodRemovedBg from "../../../public/images/food/food-specialty-removebg-preview.png";
import food2RemovedBg from "../../../public/images/food/IMG-20231031-WA0011-removebg-preview.png";
import food3RemovedBg from "../../../public/images/food/food-cake-removebg-preview.png";
import food4RemovedBg from "../../../public/images/food/food-pasta-removebg-preview.png";
import restaurant2 from "../../../public/images/restaurant/restaurant-outside-17-medium.jpg";
import restaurant3 from "../../../public/images/restaurant/restaurant-inside-12-medium.jpg";
import restaurant4 from "../../../public/images/restaurant/restaurant-inside-13.jpg";
import restaurantInside from "../../../public/images/restaurant/restaurant-inside.jpg";
import restaurantOutside from "../../../public/images/restaurant/restaurant-outside.jpg";
import restaurantOutside1 from "../../../public/images/restaurant/restaurant-outside-1.jpg";
import aperol from "../../../public/images/food/hotel-svetionik-restaurant-aperol.jpg";
import wineCellarDetails from "../../../public/images/wine-cellar/wine-cellar-details.jpg";
import foodMenuIcon from "../../../public/svg/food-menu.svg";
import en from "../../../locales/en";
import sr from "../../../locales/sr";
import { smoothScrollToForm } from "../../../helpers/helperFunctions";
import PageLayout from "../../../layout/PageLayout/PageLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Restaurant = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <>
      <Head>
        <title>{t.metadata.restaurant.title}</title>
        <meta name="title" content={t.metadata.restaurant.title} />
        <meta name="description" content={t.metadata.restaurant.description} />
        <meta
          name="keywords"
          content="restoran, riba, biftek, rostilj obrenovac"
        />
        <meta property="og:title" content={t.metadata.restaurant.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.restaurant.description}
        />
      </Head>
      <article className="pagerestaurant">
        <PageLayout
          heading={t.common.restaurant}
          pageLayoutSummary={t.common.wideSelectionOfDishes}
          backgroundImageUrl={restaurant4}
        >
          <ServiceLayout
            currentService="restaurant"
            serviceLayoutHeading={t.common.restaurant}
            horizontalImageUrl={aperol}
          >
            <div className="pagerestaurant__section">
              <div className="pagerestaurant__side-image">
                <Image src={restaurantOutside} alt="Hotel Svetionik restoran" />
              </div>
              <div className="pagerestaurant__main-content">
                <p>{t.pages.restaurant.subheading2}</p>
                <p>{t.pages.restaurant.subheading3}</p>
                <div className="pagerestaurant__food-images">
                  <Image src={foodRemovedBg} alt="Hotel Svetionik restoran" />
                  <Image src={food3RemovedBg} alt="Hotel Svetionik restoran" />
                  <Image src={food4RemovedBg} alt="Hotel Svetionik restoran" />
                  <Image src={food2RemovedBg} alt="Hotel Svetionik restoran" />
                </div>
              </div>
              <div className="pagerestaurant__side-image">
                <Image src={aperol} alt="Hotel Svetionik restoran" />
              </div>
            </div>

            <div className="pagerestaurant__text-and-images">
              <div className="pagerestaurant__text">
                <h3>{t.common.rusticWithStyle}</h3>
                <p>{t.pages.restaurant.subheading1}</p>
              </div>
              <div className="pagerestaurant__images">
                <div className="pagerestaurant__single-image">
                  <Image
                    src={wineCellarDetails}
                    alt="Hotel Svetionik restoran"
                  />
                </div>
                <div className="pagerestaurant__single-image">
                  <Image
                    src={restaurantInside}
                    alt="Hotel Svetionik restoran"
                  />
                </div>
                <div className="pagerestaurant__single-image">
                  <Image
                    src={restaurantOutside1}
                    alt="Hotel Svetionik restoran"
                  />
                </div>
              </div>
            </div>
            <a
              className="backlink pagerestaurant__menu"
              href="/assets/hotel-svetionik-jelovnik.pdf"
              target="_blank"
              // download
            >
              <Image src={foodMenuIcon} alt="Food menu icon" />
              <p>{t.pages.restaurant.menuText}</p>
            </a>
            <div className="section-buttons">
              {" "}
              <NavigationButton
                navigationButtonLabel={t.common.contact}
                onButtonClick={smoothScrollToForm}
                darkMode={true}
              />
              <NavigationButton
                navigationButtonLabel={t.common.gallery}
                navigationButtonLink="/galerija#restoran"
              />
            </div>
            <Carousel
              className="pagerestaurant__carousel"
              centerMode
              centerSlidePercentage={20}
              showArrows
              infiniteLoop
              autoPlay
              interval={6000}
              transitionTime={3000}
              showStatus={false}
              showThumbs={false}
            >
              <Image src={food} alt="Hotel Svetionik hrana" />
              <Image src={restaurant3} alt="Hotel Svetionik restoran" />
              <Image src={food2} alt="Hotel Svetionik hrana" />
              <Image src={restaurant2} alt="Hotel Svetionik letnja bašta" />
              <Image src={food3} alt="Hotel Svetionik letnja bašta" />
              <Image
                src={restaurantOutside2}
                alt="Hotel Svetionik letnja bašta"
              />
              <Image src={food4} alt="Hotel Svetionik hrana" />
              <Image src={food5} alt="Hotel Svetionik restoran" />
              <Image
                src={restaurantOutside3}
                alt="Hotel Svetionik letnja bašta"
              />
              <Image src={food6} alt="Hotel Svetionik hrana" />
              <Image src={restaurant4} alt="Hotel Svetionik letnja bašta" />
            </Carousel>
          </ServiceLayout>
        </PageLayout>
      </article>
    </>
  );
};

export default Restaurant;
