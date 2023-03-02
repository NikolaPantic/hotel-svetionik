import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import PageLayout from "../../layout/PageLayout/PageLayout";
import hotel from "../../public/images/hotel/hotel-svetionik.jpg";
import hotel2 from "../../public/images/hotel/hotel-svetionik-2.jpg";
import garden from "../../public/images/restaurant/restaurant-outside-8.jpg";
import food from "../../public/images/food.jpg";
import weddingHall from "../../public/images/wedding-hall.jpg";
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
        <title>O nama | Hotel Svetionik Obrenovac</title>
        <meta name="title" content="O nama" />
        <meta
          name="description"
          content="Nalazimo se na 30 km od Beograda, na samoj obali reke Save. Okruzeni vodom i zelenilom, predstavljamo idealno mesto za odmor i opustanje od svakodnevnog stresnog zivota. Prenocite u hotelu ili popijte kaficu pored reke u prijatnoj atmosferi uz ljubazno osoblje."
        />
        <meta
          name="keywords"
          content="reka Sava, hotel, Obrenovac, hotel Svetionik"
        />
        <meta property="og:title" content="O nama" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="" />
        <meta
          property="og:description"
          content="Nalazimo se na 30 km od Beograda, na samoj obali reke Save. Okruzeni vodom i zelenilom, predstavljamo idealno mesto za odmor i opustanje od svakodnevnog stresnog zivota. Prenocite u hotelu ili popijte kaficu pored reke u prijatnoj atmosferi uz ljubazno osoblje."
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
              <h4 className="heading-small">{t.pages.about.section1Heading}</h4>
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
              <h4 className="heading-small">{t.pages.about.section2Heading}</h4>
              <div className="pageaboutus__content--text">
                <p>{t.pages.about.section2Text1}</p>
                <p>{t.pages.about.section2Text2}</p>
                <p>{t.pages.about.section2Text3}</p>

                <p>
                  {`${t.pages.about.section2Text4} `}
                  <Link href="/usluge" className="backlink">
                    {t.pages.about.section2Text5}
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>
          <section className="pageaboutus__section">
            <div className="pageaboutus__content">
              <h4 className="heading-small">{t.pages.about.section3Heading}</h4>
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
