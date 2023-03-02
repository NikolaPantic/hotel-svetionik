import Link from "next/link";

const NavigationButton = ({
  navigationButtonLabel = "label",
  darkMode = false,
  navigationButtonLink = "",
}) => {
  return (
    <Link
      href={navigationButtonLink}
      className={
        darkMode
          ? "navigationbutton navigationbutton__dark"
          : "navigationbutton"
      }
    >
      {navigationButtonLabel}
    </Link>
  );
};

export default NavigationButton;
