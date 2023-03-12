import Head from "next/head";
import { useRouter } from "next/router";
import SingleRoomLayout from "../../../layout/singleRoomLayout/SingleRoomLayout";
import sr from "../../../locales/sr";
import en from "../../../locales/en";

const RoomWithExtraBed = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <>
      <Head>
        <title>{t.metadata.roomWithExtraBed.title}</title>
        <meta name="title" content={t.metadata.roomWithExtraBed.title} />
        <meta
          name="description"
          content={t.metadata.roomWithExtraBed.description}
        />
        <meta name="keywords" content="soba, dodatni lezaj, soba za 4 osobe" />
        <meta property="og:title" content={t.metadata.roomWithExtraBed.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.roomWithExtraBed.description}
        />
      </Head>
      <SingleRoomLayout singleRoom={"doubleRoom"} />
    </>
  );
};

export default RoomWithExtraBed;
