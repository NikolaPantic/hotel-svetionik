import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import TranslatedLink from "../../../components/TranslatedLink/TranslatedLink";
import banquetHall from "../../../public/images/celebrations/banquet-hall-2.jpg";
import banquetHall1 from "../../../public/images/celebrations/banquet-hall-5.jpg";
import banquetHall2 from "../../../public/images/celebrations/banquet-hall-1.jpg";
import banquetHall3 from "../../../public/images/celebrations/banquet-hall-3.jpg";
import clubHall from "../../../public/images/celebrations/club-hall-card.jpg";
import clubHall3 from "../../../public/images/celebrations/club-hall-card-1.jpg";
import clubHall2 from "../../../public/images/celebrations/club-hall-card-2.jpg";
import clubHall1 from "../../../public/images/celebrations/club-hall-card-3.jpg";
import FormMini from "../../../components/FormMini/FormMini";
import NavigationButton from "../../../components/NavigationButton/NavigationButton";
import ListServiceCardMini from "../../../components/ListServiceCardMini/ListServiceCardMini";
import en from "../../../locales/en";
import sr from "../../../locales/sr";
import { smoothScrollToForm } from "../../../helpers/helperFunctions";

const Celebrations = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <>
      <Head>
        <title>{t.metadata.celebrations.title}</title>
        <meta name="title" content={t.metadata.celebrations.title} />
        <meta
          name="description"
          content={t.metadata.celebrations.description}
        />
        <meta name="keywords" content="proslave, svadbe, sala" />
        <meta property="og:title" content={t.metadata.celebrations.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.celebrations.description}
        />
      </Head>
      <article className="pagecelebrations">
        <h1 className="heading-secondary">{t.common.celebrations}</h1>
        <div className="pagecelebrations__introduction">
          <p>
            {t.pages.celebrations.subheading1}{" "}
            <TranslatedLink href="/usluge/restoran" className="backlink">
              {t.pages.celebrations.subheading2}
            </TranslatedLink>{" "}
            {t.pages.celebrations.subheading3}{" "}
            <TranslatedLink href="/usluge/vinski-podrum" className="backlink">
              {t.pages.celebrations.subheading4}
            </TranslatedLink>
            , {t.pages.celebrations.subheading5}{" "}
          </p>
          <p>
            <strong>{t.pages.celebrations.subheading6} </strong>
            {t.pages.celebrations.subheading7}{" "}
            <strong>{t.pages.celebrations.subheading8}</strong>{" "}
            {t.pages.celebrations.subheading9}
          </p>
          <p>{t.pages.celebrations.subheading10}</p>
        </div>
        <section className="pagecelebrations__hall">
          <div className="pagecelebrations__description">
            <h2 className="heading-small">
              {t.pages.celebrations.section1Heading}
            </h2>
            <div className="pagecelebrations__description--text">
              <p>{t.pages.celebrations.section1Text1}</p>
              <p>{t.pages.celebrations.section1Text2}</p>
            </div>
            <div className="pagecelebrations__description--buttons">
              <NavigationButton
                darkMode={true}
                navigationButtonLabel={t.buttons.bookNow}
                onButtonClick={smoothScrollToForm}
              />

              <NavigationButton
                navigationButtonLabel={t.common.gallery}
                navigationButtonLink="/galerija#proslave"
              />
            </div>
          </div>

          <div className="pagecelebrations__images">
            <Image src={banquetHall} alt="banket sala hotela Svetionik" />
            <Image src={banquetHall1} alt="banket sala hotela Svetionik" />
            <Image src={banquetHall2} alt="banket sala hotela Svetionik" />
            <Image src={banquetHall3} alt="banket sala hotela Svetionik" />
          </div>
        </section>
        <section className="pagecelebrations__hall">
          <div className="pagecelebrations__images">
            <Image src={clubHall} alt="klub sala hotela Svetionik" />
            <Image src={clubHall1} alt="klub sala hotela Svetionik" />
            <Image src={clubHall2} alt="klub sala hotela Svetionik" />
            <Image src={clubHall3} alt="klub sala hotela Svetionik" />
          </div>
          <div className="pagecelebrations__description">
            <h2 className="heading-small">
              {t.pages.celebrations.section2Heading}
            </h2>
            <div className="pagecelebrations__description--text">
              <p>{t.pages.celebrations.section2Text1}</p>
              <p>{t.pages.celebrations.section2Text2}</p>
              <p></p>
            </div>
            <div className="pagecelebrations__description--buttons">
              <NavigationButton
                navigationButtonLabel={t.buttons.bookNow}
                darkMode={true}
                onButtonClick={smoothScrollToForm}
              />
              <NavigationButton
                navigationButtonLabel={t.common.gallery}
                navigationButtonLink="/galerija#proslave"
              />
            </div>
          </div>
        </section>
        <ListServiceCardMini currentService="wedding" />
        <FormMini />
      </article>
    </>
  );
};

export default Celebrations;
