import { useState } from "react";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const SectionNews = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [successfulEmail, setSuccessfulEmail] = useState(false);

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  return (
    <section className="sectionnews">
      <div className="sectionnews__container">
        <h2 className="sectionnews__container--heading">{t.common.news}</h2>
        <div className="sectionnews__container--content">
          <p>{t.sections.news.newsText}</p>
        </div>
      </div>
      <div className="sectionnews__container">
        <h2 className="sectionnews__container--heading">Newsletter</h2>
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
              <label htmlFor="email">{t.sections.news.newsletterText2}:</label>
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
                } else {
                  setSuccessfulEmail(false);
                  setInvalidEmail(true);
                }
              }}
              className="sectionnews__form--button"
            >
              {t.buttons.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionNews;
