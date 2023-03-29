import TranslatedLink from "../TranslatedLink/TranslatedLink";
const NavigationButton = ({
  navigationButtonLabel = "label",
  darkMode = false,
  navigationButtonLink = "",
  onButtonClick = () => {},
}) => {
  return (
    <TranslatedLink
      onClick={onButtonClick}
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
