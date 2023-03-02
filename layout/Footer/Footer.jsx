import Link from "next/link";
import { useRouter } from "next/router";
import FooterSection from "../../components/FooterSection/FooterSection";
import facebook from "../../public/svg/facebook.svg";
import instagram from "../../public/svg/instagram.svg";
import Image from "next/image";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Footer = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <footer className="footer">
      <div className="footer__sections">
        <FooterSection footerSectionHeading={t.common.basicInfo}>
          <p>Hotel Svetionik D.O.O.</p>
          <p>Zabreških Partizana 30</p>
          <p>11500, Obrenovac</p>
          <p>{t.common.taxID}:1234567890</p>
        </FooterSection>
        <FooterSection footerSectionHeading={t.common.services}>
          <Link className="clickable-link" href="/usluge/sobe">
            {t.common.roomsBooking}
          </Link>
          <Link className="clickable-link" href="/usluge/proslave">
            {t.common.weddingCelebrations}
          </Link>
          <Link className="clickable-link" href="/usluge/restoran">
            {t.common.restaurant}
          </Link>
          <Link className="clickable-link" href="/usluge/brodska-marina">
            {t.common.shipMarina}
          </Link>
          <Link className="clickable-link" href="/usluge/vinski-podrum">
            {t.common.wineCellar}
          </Link>
        </FooterSection>
        <FooterSection footerSectionHeading={t.common.rooms}>
          <Link
            className="clickable-link"
            href={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "standardna-soba" },
            }}
          >
            {t.common.standardRoom}
          </Link>
          <Link
            className="clickable-link"
            href={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "soba-sa-dodatnim-lezajem" },
            }}
          >
            {t.common.roomWithExtraBed}
          </Link>
          <Link
            className="clickable-link"
            href={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "superior-apartman-sa-djakuzijem" },
            }}
          >
            {t.common.superiorApartment}
          </Link>
        </FooterSection>
        <FooterSection footerSectionHeading={t.common.contact}>
          <p>
            Hotel:{" "}
            <Link className="clickable-link" href="tel:0651234567">
              0651234567
            </Link>
          </p>
          <p>
            {t.common.restaurant}:{" "}
            <Link className="clickable-link" href="tel:0651234567">
              0651234567
            </Link>
          </p>
          <p>
            E-mail:{" "}
            <Link
              className="clickable-link"
              href="mailto:hotelsvetionik@gmail.com"
            >
              hotelsvetionik@gmail.com
            </Link>
          </p>
        </FooterSection>
      </div>
      <div className="footer__social">
        <Link className="clickable-link social" href="/">
          <Image src={facebook} alt="Facebook logo" />
          <span>Svetionik Obrenovac na Savi</span>
        </Link>
        <Link className="clickable-link social" href="/">
          <Image src={instagram} alt="Instagram logo" />
          <span>svetionik_obrenovac_na_savi</span>
        </Link>
      </div>

      <span className="footer__rightsreserved">
        &copy; Hotel Svetionik Obrenovac. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
