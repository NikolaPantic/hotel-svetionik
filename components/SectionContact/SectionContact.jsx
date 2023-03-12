import FormField from "../FormField/FormField";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const SectionContact = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <section className="section sectioncontact">
      <h2 className="heading-secondary">{t.common.contact}</h2>

      <p>
        {t.sections.contact.text1}{" "}
        <a href="mailto:hotelsvetionik@gmail.com" className="backlink">
          {t.sections.contact.text2}
        </a>
        ,{" "}
        <a href="tel:+381641234567" className="backlink">
          {t.sections.contact.text3}
        </a>{" "}
        {t.sections.contact.text4}{" "}
        <a
          href="https://goo.gl/maps/XMqbpMmLQgFx5qL29"
          target="_blank"
          rel="noreferrer"
          className="backlink"
        >
          {t.sections.contact.text5}
        </a>
        .
      </p>

      <div className="sectioncontact__content">
        <div className="sectioncontact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.190561748924!2d20.19072301553119!3d44.67488687909958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a14e5d12a9d3d%3A0xf25f1bfe79ba3dfa!2z0KXQvtGC0LXQuyDQodCy0LXRgtC40L7QvdC40Lo!5e0!3m2!1ssr!2srs!4v1674165753674!5m2!1ssr!2srs"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Svetionik mapa"
          ></iframe>
        </div>
        <div className="sectioncontact__form-and-info">
          <form className="sectioncontact__form-and-info--form">
            <h4 className="heading-small">{t.sections.contact.formHeading}</h4>
            <FormField
              labelValue={t.form.name}
              placeholder={t.placeholders.name}
            />
            <FormField
              labelValue={t.form.email}
              placeholder={t.placeholders.email}
            />
            <FormField
              labelValue={t.form.phone}
              placeholder={t.placeholders.phone}
            />
            <FormField
              labelValue={t.form.message}
              wide={true}
              placeholder={t.placeholders.message}
            />

            <button className="navigationbutton navigationbutton__dark">
              {t.buttons.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
