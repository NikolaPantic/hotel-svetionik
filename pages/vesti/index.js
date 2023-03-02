import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import PageLayout from "../../layout/PageLayout/PageLayout";
import news from "../../public/images/news.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const News = () => {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [successfulEmail, setSuccessfulEmail] = useState(false);

  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  return (
    <>
      <Head>
        <title>Vesti | Hotel Svetionik Obrenovac</title>
        <meta name="title" content="Vesti | Hotel Svetionik Obrenovac" />
        <meta
          name="description"
          content="Novosti i vesti iz hotela Obrenovac."
        />
        <meta name="keywords" content="vesti, hotel vesti" />
        <meta property="og:title" content="Vesti | Hotel Svetionik Obrenovac" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content="Novosti i vesti iz hotela Obrenovac."
        />
      </Head>
      <article className="pagenews">
        <PageLayout
          heading={t.common.news}
          backgroundImageUrl={news}
          pageLayoutSummary={t.pages.news.subheading}
        >
          <p className="pagenews__notification">{t.sections.news.newsText}</p>
          <div className="sectionnews__container">
            <h4 className="sectionnews__container--heading">Newsletter</h4>
            <div className="sectionnews__container--content">
              <p>{t.sections.news.newsletterText1}</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="sectionnews__form"
              >
                <div
                  className={
                    invalidEmail
                      ? "sectionnews__form--email-field sectionnews__invalid-email"
                      : successfulEmail
                      ? "sectionnews__form--email-field sectionnews__successful-email"
                      : "sectionnews__form--email-field"
                  }
                >
                  <label htmlFor="email">
                    {t.sections.news.newsletterText2}
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder={t.placeholders.email}
                    onChange={(e) => {
                      if (invalidEmail) {
                        setInvalidEmail(false);
                      }
                      setSuccessfulEmail(false);
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    if (email.match(emailRegex)) {
                      if (invalidEmail) {
                        setInvalidEmail(false);
                      }
                      setSuccessfulEmail(true);
                      console.log("succes");
                    } else {
                      setSuccessfulEmail(false);
                      setInvalidEmail(true);
                      console.log("fail");
                    }
                  }}
                  className="sectionnews__form--button"
                >
                  {t.buttons.submit}
                </button>
              </form>
            </div>
          </div>
        </PageLayout>
      </article>
    </>
  );
};

export default News;
