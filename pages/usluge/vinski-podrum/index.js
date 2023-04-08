import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import NavigationButton from "../../../components/NavigationButton/NavigationButton";
import ServiceLayout from "../../../layout/ServiceLayout/ServiceLayout";
import wineCellar1 from "../../../public/images/wine-cellar/wine-cellar-3-medium.jpg";
import wineCellar2 from "../../../public/images/wine-cellar/wine-cellar-4-medium.jpg";
import wineCellar3 from "../../../public/images/wine-cellar/wine-cellar-hall-medium.jpg";
import wineCellar4 from "../../../public/images/wine-cellar/wine-cellar-wine-bottle-medium.jpg";
import en from "../../../locales/en";
import sr from "../../../locales/sr";
import { smoothScrollToForm } from "../../../helpers/helperFunctions";

const WineCellar = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <>
      <Head>
        <title>{t.metadata.wineCellar.title}</title>
        <meta name="title" content={t.metadata.wineCellar.title} />
        <meta name="description" content={t.metadata.wineCellar.description} />
        <meta
          name="keywords"
          content="vinski podrum, vinski podrum obrenovac"
        />
        <meta property="og:title" content={t.metadata.wineCellar.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.wineCellar.description}
        />
      </Head>
      <article className="pagewinecellar">
        <ServiceLayout
          currentService="wine-cellar"
          serviceLayoutHeading={t.common.wineCellar}
          serviceLayoutText={[
            t.pages.wineCellar.subheading1,
            t.pages.wineCellar.subheading2,
            t.pages.wineCellar.subheading3,
          ]}
        >
          <div className="section-buttons">
            <NavigationButton
              navigationButtonLabel={t.common.contact}
              onButtonClick={smoothScrollToForm}
              darkMode={true}
            />
            <NavigationButton
              navigationButtonLabel={t.common.gallery}
              navigationButtonLink="/galerija#vinski-podrum"
            />
          </div>
          <section className="pagewinecellar__images">
            <Image src={wineCellar1} alt="Hotel Svetionik vinski podrum" />
            <Image src={wineCellar3} alt="Hotel Svetionik vinski podrum" />
            <Image src={wineCellar4} alt="Hotel Svetionik vinski podrum" />
            <Image src={wineCellar2} alt="Hotel Svetionik vinski podrum" />
          </section>
        </ServiceLayout>
      </article>
    </>
  );
};

export default WineCellar;
