import Link from "next/link";

const NavigationLink = ({ path = "/", navigationLinkLabel = "" }) => {
  return (
    <Link href={path} className="navigationlink">
      {navigationLinkLabel} &rarr;
    </Link>
  );
};

export default NavigationLink;
