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

const Restaurant = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <>
      <Head>
        <title>Restoran | Hotel Svetionik Obrenovac</title>
        <meta name="title" content="Restoran | Hotel Svetionik Obrenovac" />
        <meta
          name="description"
          content="Restoran je tipa nacionalne kuhinje, sa naglaskom na ribljim specijalitetima. Sastoji se iz 2 dela: zatvorenog dela i letnje bašte. Nudimo širok izbor jela: riblji specijaliteti, paste, jela sa roštilja, biftek... Posetite nas i uverite se u naš kvalitet."
        />
        <meta
          name="keywords"
          content="restoran, restoran Obrenovac, riba, biftek, rostilj obrenovac, reka sava"
        />
        <meta
          property="og:title"
          content="Restoran | Hotel Svetionik Obrenovac"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content="Restoran je tipa nacionalne kuhinje, sa naglaskom na ribljim specijalitetima. Sastoji se iz 2 dela: zatvorenog dela i letnje bašte. Nudimo širok izbor jela: riblji specijaliteti, paste, jela sa roštilja, biftek... Posetite nas i uverite se u naš kvalitet."
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
              navigationButtonLink="tel:+381641234567"
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
