import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import PageLayout from "../../layout/PageLayout/PageLayout";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import FormMini from "../../components/FormMini/FormMini";
import gallery from "../../assets/images//gallery.jpg";
import reservation from "../../public/images/reservation.jpg";
import room1 from "../../public/images/rooms/single/single-room.jpg";
import room2 from "../../public/images/rooms/double/double-room.jpg";
import room3 from "../../public/images/rooms/superior/superior-room-bathroom-2.jpg";
import room4 from "../../public/images/rooms/superior/superior-room-beds.jpg";
import weddingHall from "../../public/images/celebrations/banquet-hall-1.jpg";
import weddingHall1 from "../../public/images/celebrations/banquet-hall-5.jpg";
import weddingHall2 from "../../public/images/celebrations/banquet-hall-7.jpg";
import weddingHall3 from "../../public/images/celebrations/banquet-hall-2.jpg";
import restaurant1 from "../../public/images/restaurant/restaurant-inside-3.jpg";
import restaurant2 from "../../public/images/restaurant/restaurant-inside-7.jpg";
import restaurant3 from "../../public/images/restaurant/restaurant-outside-1.jpg";
import restaurant4 from "../../public/images/restaurant/restaurant-outside-view-2.jpg";
import wineCellar1 from "../../public/images/wine-cellar/wine-cellar.jpg";
import wineCellar2 from "../../public/images/wine-cellar/wine-cellar-4.jpg";
import wineCellar3 from "../../public/images/wine-cellar/wine-cellar-hall.jpg";
import wineCellar4 from "../../public/images/wine-cellar/wine-cellar-wall-1.jpg";
import boatMarina from "../../public/images/boat-marina/boat-marina.jpg";
import boatMarina1 from "../../public/images/boat-marina/boat-marina-1.jpg";
import boatMarina2 from "../../public/images/boat-marina/boat-marina-2.jpg";
import boatMarina3 from "../../public/images/boat-marina/boat-marina-3.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Services = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;
  return (
    <>
      <Head>
        <title>{t.metadata.services.title}</title>
        <meta name="title" content={t.metadata.services.title} />
        <meta name="description" content={t.metadata.services.description} />
        <meta
          name="keywords"
          content="proslava, restoran, brodska marina, vinski podrum"
        />
        <meta property="og:title" content={t.metadata.services.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.services.description}
        />
      </Head>
      <article className="pageservices">
        <PageLayout
          heading={t.common.services}
          backgroundImageUrl={reservation}
          pageLayoutSummary={t.pages.services.subheading}
        >
          <section className="pageservices__section">
            <h2 className="heading-small">{t.common.roomsBooking}</h2>
            <p className="pageservices__section--text">
              {t.pages.services.text1}
            </p>
            <div className="pageservices__section--images">
              <div className="pageservices__section--images--single-image">
                <Image src={room1} alt="Hotel Svetionik jednokrevetna soba" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image
                  src={room2}
                  alt="Hotel Svetionik soba sa pomoćnim ležajem"
                />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image
                  src={room3}
                  alt="Hotel Svetionik superior apartman sa đakuzijem"
                />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image
                  src={room4}
                  alt="Hotel Svetionik superior apartman sa đakuzijem"
                />
              </div>
            </div>
            <div className="pageservices__section--buttons">
              <NavigationButton
                navigationButtonLabel={t.buttons.details}
                navigationButtonLink="/usluge/sobe"
                darkMode={true}
              />

              <NavigationButton
                navigationButtonLabel={t.common.gallery}
                navigationButtonLink="/galerija#sobe"
              />
            </div>
          </section>
          <section className="pageservices__section pageservices__section--celebrations">
            <h2 className="heading-small">{t.common.celebrations}</h2>
            <p className="pageservices__section--text">
              {t.pages.services.text2}
            </p>
            <div className="pageservices__section--images">
              <div className="pageservices__section--images--single-image">
                <Image src={weddingHall3} alt="Hotel Svetionik svečana sala" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={weddingHall1} alt="Hotel Svetionik svečana sala" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={weddingHall} alt="Hotel Svetionik svečana sala" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={weddingHall2} alt="Hotel Svetionik svečana sala" />
              </div>
            </div>
            <div className="pageservices__section--buttons">
              <NavigationButton
                navigationButtonLabel={t.buttons.details}
                darkMode={true}
                navigationButtonLink="/usluge/proslave"
              />
              <NavigationButton
                navigationButtonLabel={t.common.gallery}
                navigationButtonLink="/galerija#proslave"
              />
            </div>
          </section>
          <section className="pageservices__section">
            <h2 className="heading-small">{t.common.restaurant}</h2>
            <p className="pageservices__section--text">
              {t.pages.services.text3}
            </p>
            <div className="pageservices__section--images">
              <div className="pageservices__section--images--single-image">
                <Image src={restaurant1} alt="Hotel Svetionik restoran" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={restaurant2} alt="Hotel Svetionik restoran" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={restaurant3} alt="Hotel Svetionik letnja bašta" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={restaurant4} alt="Hotel Svetionik letnja bašta" />
              </div>
            </div>

            <div className="pageservices__section--buttons">
              <NavigationButton
                navigationButtonLabel={t.buttons.details}
                darkMode={true}
                navigationButtonLink="/usluge/restoran"
              />
              <NavigationButton
                navigationButtonLabel={t.common.gallery}
                navigationButtonLink="/galerija#restoran"
              />
            </div>
          </section>
          <section className="pageservices__section pageservices__section--marina">
            <h2 className="heading-small">{t.common.shipMarina}</h2>
            <p className="pageservices__section--text">
              {t.pages.services.text4}
            </p>
            <div className="pageservices__section--images">
              <div className="pageservices__section--images--single-image">
                <Image src={boatMarina} alt="Hotel Svetionik brodska marina" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={boatMarina1} alt="Hotel Svetionik brodska marina" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={boatMarina3} alt="Hotel Svetionik brodska marina" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={boatMarina2} alt="Hotel Svetionik brodska marina" />
              </div>
            </div>
            <NavigationButton
              navigationButtonLabel={t.buttons.details}
              darkMode={true}
              navigationButtonLink="/usluge/brodska-marina"
            />
          </section>
          <section className="pageservices__section">
            <h2 className="heading-small">{t.common.wineCellar}</h2>
            <p className="pageservices__section--text">
              {t.pages.services.text5}
            </p>
            <div className="pageservices__section--images">
              <div className="pageservices__section--images--single-image">
                <Image src={wineCellar1} alt="Hotel Svetionik vinski podrum" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={wineCellar2} alt="Hotel Svetionik vinski podrum" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={wineCellar3} alt="Hotel Svetionik vinski podrum" />
              </div>
              <div className="pageservices__section--images--single-image">
                <Image src={wineCellar4} alt="Hotel Svetionik vinski podrum" />
              </div>
            </div>
            <div className="pageservices__section--buttons">
              <NavigationButton
                navigationButtonLabel={t.buttons.details}
                darkMode={true}
                navigationButtonLink="/usluge/vinski-podrum"
              />
              <NavigationButton
                navigationButtonLabel={t.common.gallery}
                navigationButtonLink="/galerija#vinski-podrum"
              />
            </div>
          </section>
          <FormMini />
        </PageLayout>
      </article>
    </>
  );
};

export default Services;
