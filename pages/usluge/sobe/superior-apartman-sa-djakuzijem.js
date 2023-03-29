import Head from "next/head";
import { useRouter } from "next/router";
import sr from "../../../locales/sr";
import en from "../../../locales/en";
import SingleRoomLayout from "../../../layout/SingleRoomLayout/SingleRoomLayout";

const SuperiorApartment = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <>
      <Head>
        <title>{t.metadata.superiorApartment.title}</title>
        <meta name="title" content={t.metadata.superiorApartment.title} />
        <meta
          name="description"
          content={t.metadata.superiorApartment.description}
        />
        <meta name="keywords" content="standardna soba, soba za 2 osobe" />
        <meta
          property="og:title"
          content={t.metadata.superiorApartment.title}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.superiorApartment.description}
        />
      </Head>
      <SingleRoomLayout singleRoom={"superiorRoom"} />
    </>
  );
};

export default SuperiorApartment;
