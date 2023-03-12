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
      <article className="landingpage">
        <CarouselComponent />
        <SectionAboutUs />
        <SectionRooms />
        <SectionServices />
        <SectionGallery />
        <SectionNews />
        <SectionContact />
      </article>
    </div>
  );
}
