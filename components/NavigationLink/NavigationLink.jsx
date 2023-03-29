import TranslatedLink from "../TranslatedLink/TranslatedLink";
const NavigationLink = ({ path = "/", navigationLinkLabel = "" }) => {
  return (
    <TranslatedLink href={path} className="navigationlink">
      {navigationLinkLabel} &rarr;
    </TranslatedLink>
  );
};

export default NavigationLink;
