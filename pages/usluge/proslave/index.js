import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import hall from "../../../assets/images/hotel-svetionik-1.jpg";
import FormMini from "../../../components/FormMini/FormMini";
import NavigationButton from "../../../components/NavigationButton/NavigationButton";
import ListServiceCardMini from "../../../components/ListServiceCardMini/ListServiceCardMini";
import en from "../../../locales/en";
import sr from "../../../locales/sr";

const Celebrations = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <>
      <Head>
        <title>Proslave | Hotel Svetionik Obrenovac</title>
        <meta name="title" content="Proslave | Hotel Svetionik Obrenovac" />
        <meta
          name="description"
          content="Organizujemo sve vrste proslava do 400 ljudi. Na raspolaganju su vam banket sala, klub sala, restoran i vinski podrum. Zakažite vaš termin na vreme."
        />
        <meta
          name="keywords"
          content="svadba cena,svadba, proslava, punoletstvo, restoran, svecana sala, hotel"
        />
        <meta
          property="og:title"
          content="Proslave | Hotel Svetionik Obrenovac"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content="Organizujemo sve vrste proslava do 400 ljudi. Na raspolaganju su vam banket sala, klub sala, restoran i vinski podrum. Zakažite vaš termin na vreme."
        />
      </Head>
      <article className="pagecelebrations">
        <h2 className="heading-secondary">{t.common.celebrations}</h2>
        <div className="pagecelebrations__introduction">
          <p>
            {t.pages.celebrations.subheading1}{" "}
            <Link href="/usluge/restoran" className="backlink">
              {t.pages.celebrations.subheading2}
            </Link>{" "}
            {t.pages.celebrations.subheading3}{" "}
            <Link href="/usluge/vinski-podrum" className="backlink">
              {t.pages.celebrations.subheading4}
            </Link>
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
            <h4 className="heading-small">
              {t.pages.celebrations.section1Heading}
            </h4>
            <div className="pagecelebrations__description--text">
              <p>{t.pages.celebrations.section1Text1}</p>
              <p>{t.pages.celebrations.section1Text2}</p>
            </div>
            <div className="pagecelebrations__description--buttons">
              <NavigationButton
                darkMode={true}
                navigationButtonLabel={t.buttons.callUs}
                navigationButtonLink="tel:+381641234567"
              />

              <NavigationButton
                navigationButtonLabel={t.common.gallery}
                navigationButtonLink="/galerija#proslave"
              />
            </div>
          </div>

          <div className="pagecelebrations__images">
            <Image src={hall} alt="hall" />
            <Image src={hall} alt="hall" />
            <Image src={hall} alt="hall" />
            <Image src={hall} alt="hall" />
          </div>
        </section>
        <section className="pagecelebrations__hall">
          <div className="pagecelebrations__images">
            <Image src={hall} alt="hall" />
            <Image src={hall} alt="hall" />
            <Image src={hall} alt="hall" />
            <Image src={hall} alt="hall" />
          </div>
          <div className="pagecelebrations__description">
            <h4 className="heading-small">
              {t.pages.celebrations.section2Heading}
            </h4>
            <p className="pagecelebrations__description--text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab error
              dolorum dolores quod consectetur, dolor cupiditate ad inventore
              facilis earum libero fugit sed nihil quos sapiente quaerat
              aspernatur. Culpa eaque consequatur consequuntur praesentium
              eligendi repellendus enim id dolor, sequi nihil qui molestiae at,
              amet repudiandae sint harum illo beatae facere!
            </p>
            <div className="pagecelebrations__description--buttons">
              <NavigationButton
                navigationButtonLabel={t.buttons.callUs}
                darkMode={true}
                navigationButtonLink="tel:+381641234567"
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
