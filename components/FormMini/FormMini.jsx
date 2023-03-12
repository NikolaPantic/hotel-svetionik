import { useRouter } from "next/router";
import FormField from "../FormField/FormField";
import en from "../../locales/en";
import sr from "../../locales/sr";

const FormMini = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <section className="formmini">
      <h2 className="formmini__heading">{t.form.subheading}</h2>
      <form className="formmini__form">
        <FormField labelValue={t.form.name} placeholder={t.placeholders.name} />
        <FormField
          labelValue={t.form.phone}
          placeholder={t.placeholders.phone}
        />
        <FormField
          labelValue={t.form.email}
          placeholder={t.placeholders.email}
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
    </section>
  );
};

export default FormMini;
