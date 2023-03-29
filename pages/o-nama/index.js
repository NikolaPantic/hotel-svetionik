import TranslatedLink from "../../components/TranslatedLink/TranslatedLink";
import { useRouter } from "next/router";
import Image from "next/image";
import PageLayout from "../../layout/PageLayout/PageLayout";
import hotel from "../../public/images/hotel/hotel-svetionik.jpg";
import hotel2 from "../../public/images/hotel/hotel-svetionik-2.jpg";
import garden from "../../public/images/restaurant/restaurant-outside-8.jpg";
import food from "../../public/images/food/food-breakfast.jpg";
import weddingHall from "../../public/images/celebrations/banquet-hall-7.jpg";
import wineCellar from "../../public/images/wine-cellar/wine-cellar.jpg";
import driving from "../../public/images/driving.jpg";
import bus from "../../public/images/bus.jpg";
import Head from "next/head";
import en from "../../locales/en";
import sr from "../../locales/sr";

const AboutUs = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <>
      <Head>
        <title>{t.metadata.aboutUs.title}</title>
        <meta name="title" content={t.metadata.aboutUs.title} />
        <meta name="description" content={t.metadata.aboutUs.description} />
        <meta name="keywords" content="reka Sava, hotel, hotel Svetionik" />
        <meta property="og:title" content={t.metadata.aboutUs.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="" />
        <meta
          property="og:description"
          content={t.metadata.aboutUs.description}
        />
      </Head>
      <article className="pageaboutus">
        <PageLayout
          heading={t.common.aboutUs}
          backgroundImageUrl={hotel}
          pageLayoutSummary={t.pages.about.subheading}
        >
          <section className="pageaboutus__section">
            <div className="pageaboutus__content">
              <h2 className="heading-small">{t.pages.about.section1Heading}</h2>
              <div className="pageaboutus__content--text">
                <p> {t.pages.about.section1Text1}</p>
                <p>
                  {t.pages.about.section1Text2} <strong>**</strong>,{" "}
                  {t.pages.about.section1Text3}
                </p>
                <p>{t.pages.about.section1Text4}</p>
                <p>{t.pages.about.section1Text5}</p>
              </div>
            </div>
            <div className="pageaboutus__images">
              <Image src={hotel} alt="Hotel Svetionik" />
              <Image src={hotel2} alt="Hotel Svetionik" />
            </div>
          </section>
          <section className="pageaboutus__section">
            <div className="pageaboutus__images">
              <Image src={garden} alt="Hotel Svetionik letnja basta" />
              <Image src={food} alt="Hotel Svetionik hrana" />
              <Image src={weddingHall} alt="Hotel Svetionik vinski podrum" />
              <Image src={wineCellar} alt="Hotel Svetionik vinski podrum" />
            </div>
            <div className="pageaboutus__content">
              <h2 className="heading-small">{t.pages.about.section2Heading}</h2>
              <div className="pageaboutus__content--text">
                <p>{t.pages.about.section2Text1}</p>
                <p>{t.pages.about.section2Text2}</p>
                <p>{t.pages.about.section2Text3}</p>

                <p>
                  {`${t.pages.about.section2Text4} `}
                  <TranslatedLink href="/usluge" className="backlink">
                    {t.pages.about.section2Text5}
                  </TranslatedLink>
                  .
                </p>
              </div>
            </div>
          </section>
          <section className="pageaboutus__section">
            <div className="pageaboutus__content">
              <h2 className="heading-small">{t.pages.about.section3Heading}</h2>
              <div className="pageaboutus__content--text">
                <p>{t.pages.about.section3Text1}</p>
                <p>{t.pages.about.section3Text2}</p>
                <p>{t.pages.about.section3Text3}</p>
              </div>
            </div>
            <div className="pageaboutus__images">
              <Image src={driving} alt="Voznja autom" />
              <Image src={bus} alt="Voznja autobusom" />
            </div>
          </section>
        </PageLayout>
      </article>
    </>
  );
};

export default AboutUs;
