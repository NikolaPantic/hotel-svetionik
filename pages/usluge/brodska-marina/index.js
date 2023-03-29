import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import NavigationButton from "../../../components/NavigationButton/NavigationButton";
import ServiceLayout from "../../../layout/ServiceLayout/ServiceLayout";
import marina from "../../../public/images/boat-marina/boat-marina.jpg";
import marina1 from "../../../public/images/boat-marina/boat-marina-1.jpg";

import sr from "../../../locales/sr";
import en from "../../../locales/en";
import { smoothScrollToForm } from "../../../helpers/helperFunctions";

const Marina = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <>
      <Head>
        <title>{t.metadata.boatMarina.title}</title>
        <meta name="title" content={t.metadata.boatMarina.title} />
        <meta name="description" content={t.metadata.boatMarina.description} />
        <meta name="keywords" content="brodska marina, plovilo, marina" />
        <meta property="og:title" content={t.metadata.boatMarina.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content={t.metadata.boatMarina.description}
        />
      </Head>
      <article className="pagemarina">
        <ServiceLayout
          currentService="marina"
          serviceLayoutHeading={t.common.shipMarina}
          serviceLayoutText={[
            t.pages.boatMarina.subheading1,
            t.pages.boatMarina.subheading2,
          ]}
        >
          <NavigationButton
            navigationButtonLabel={t.common.contact}
            onButtonClick={smoothScrollToForm}
            darkMode={true}
          />

          <section className="pagemarina__images">
            <Image src={marina} alt="hotel Svetionik brodska marina" />
            <Image src={marina1} alt="hotel Svetionik brodska marina" />
          </section>
        </ServiceLayout>
      </article>
    </>
  );
};

export default Marina;
