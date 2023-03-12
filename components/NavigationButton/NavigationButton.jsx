import TranslatedLink from "../TranslatedLink/TranslatedLink";
const NavigationButton = ({
  navigationButtonLabel = "label",
  darkMode = false,
  navigationButtonLink = "",
}) => {
  return (
    <TranslatedLink
      href={navigationButtonLink}
      className={
        darkMode
          ? "navigationbutton navigationbutton__dark"
          : "navigationbutton"
      }
    >
      {navigationButtonLabel}
    </TranslatedLink>
  );
};

export default NavigationButton;
