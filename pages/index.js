import Head from "next/head";
import { useRouter } from "next/router";
import CarouselComponent from "../components/Carousel/Carousel";
import SectionAboutUs from "../components/SectionAboutUs/SectionAboutUs.jsx";
import SectionRooms from "../components/SectionRooms/SectionRooms";
import SectionServices from "../components/SectionServices/SectionServices";
import SectionGallery from "../components/SectionGallery/SectionGallery";
import SectionNews from "../components/SectionNews/SectionNews";
import SectionContact from "../components/SectionContact/SectionContact";
import sr from "../locales/sr";
import en from "../locales/en";

export default function Home() {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <div>
      <Head>
        <title>{t.metadata.landingPage.title}</title>
        <meta name="title" content={t.metadata.landingPage.title} />
        <meta name="description" content={t.metadata.landingPage.description} />
        <meta name="keywords" content="hotel, Obrenovac, hotel Svetionik" />
        <meta property="og:title" content={t.metadata.landingPage.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.landingPage.title}
        />
      </Head>
      <article className="landing-page">
        <CarouselComponent />
        <SectionAboutUs />
        <div className="fixed-image"/>
        <SectionRooms />
        <div className="ads">
        <div className="fixed-image"/>
        <div className="sticky"><h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p></div>
        <div className="fixed-image"/>
          
        </div>
        <div className="fixed-image-2"/>
        <div className="fixed-image"/>


        <SectionServices />
        <SectionGallery />
        <SectionNews />
        <SectionContact />
      </article>
    </div>
  );
}
