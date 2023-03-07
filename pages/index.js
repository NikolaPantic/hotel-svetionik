import Head from "next/head";
import CarouselComponent from "../components/Carousel/Carousel";
import SectionAboutUs from "../components/SectionAboutUs/SectionAboutUs.jsx";
import SectionRooms from "../components/SectionRooms/SectionRooms";
import SectionServices from "../components/SectionServices/SectionServices";
import SectionGallery from "../components/SectionGallery/SectionGallery";
import SectionNews from "../components/SectionNews/SectionNews";
import SectionContact from "../components/SectionContact/SectionContact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Svetionik Obrenovac na Savi | Hotel | Svadbe | Restoran</title>
        <meta name="title" content="Hotel Svetionik Obrenovac" />
        <meta
          name="description"
          content="Smešten na obali Save, Svetionik je idealno mesto za sve vaše važne momente. Bogat meni i divan pogled uz kvalitetnu uslugu. Posetite nas i uverite se."
        />
        <meta name="keywords" content="hotel, Svetionik, Obrenovac" />
        <meta property="og:title" content="Hotel Svetionik Obrenovac" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content="Hotel Svetionik je lociran na samoj obali reke Save. Prijatan i miran, iz svoje ponude izdvaja izdavanje soba, organizaciju proslava, restoran na obali, vinski podrum i brodsku marinu."
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
