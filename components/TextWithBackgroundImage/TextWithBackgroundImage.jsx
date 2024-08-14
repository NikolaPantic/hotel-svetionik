import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const TextWithBackgroundImage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <div className="text-with-background-image">
      <div className="text-with-background-image__content-wrapper">
        <h3 className="text-with-background-image__heading">
          {t.common.celebrationsForAllKindOccasions}
        </h3>
        <p className="text-with-background-image__description">
          {t.common.organizeImportantEvent}
        </p>
      </div>
    </div>
  );
};

export default TextWithBackgroundImage;
