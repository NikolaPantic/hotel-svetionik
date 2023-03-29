import Image from "next/image";
import { useRouter } from "next/router";
import ServiceLayout from "../../../layout/ServiceLayout/ServiceLayout";
import NavigationButton from "../../../components/NavigationButton/NavigationButton";
import food from "../../../public/images/food.jpg";
import restaurant1 from "../../../public/images/restaurant/restaurant-inside-5.jpg";
import restaurant2 from "../../../public/images/restaurant/restaurant-outside-5.jpg";
import restaurant3 from "../../../public/images/restaurant/restaurant-outside-view.jpg";
import Head from "next/head";
import en from "../../../locales/en";
import sr from "../../../locales/sr";
import { restaurantPhoneNumber } from "../../../data/hotelData";
import { smoothScrollToForm } from "../../../helpers/helperFunctions";

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
        <ServiceLayout
          currentService="restaurant"
          serviceLayoutHeading={t.common.restaurant}
          serviceLayoutText={[
            t.pages.restaurant.subheading1,
            t.pages.restaurant.subheading2,
            t.pages.restaurant.subheading3,
          ]}
        >
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

          <section className="pagerestaurant__images">
            <Image src={food} alt="hrana" />
            <Image src={restaurant3} alt="Hotel Svetionik letnja bašta" />
            <Image src={restaurant2} alt="Hotel Svetionik letnja bašta" />
            <Image src={restaurant1} alt="Hotel Svetionik restoran" />
          </section>
        </ServiceLayout>
      </article>
    </>
  );
};

export default Restaurant;
