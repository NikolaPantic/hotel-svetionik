import TranslatedLink from "../../components/TranslatedLink/TranslatedLink";
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
          <TranslatedLink className="clickable-link" href="/usluge/sobe">
            {t.common.roomsBooking}
          </TranslatedLink>
          <TranslatedLink className="clickable-link" href="/usluge/proslave">
            {t.common.weddingCelebrations}
          </TranslatedLink>
          <TranslatedLink className="clickable-link" href="/usluge/restoran">
            {t.common.restaurant}
          </TranslatedLink>
          <TranslatedLink
            className="clickable-link"
            href="/usluge/brodska-marina"
          >
            {t.common.shipMarina}
          </TranslatedLink>
          <TranslatedLink
            className="clickable-link"
            href="/usluge/vinski-podrum"
          >
            {t.common.wineCellar}
          </TranslatedLink>
        </FooterSection>
        <FooterSection footerSectionHeading={t.common.rooms}>
          <TranslatedLink
            className="clickable-link"
            href={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "standardna-soba" },
            }}
          >
            {t.common.standardRoom}
          </TranslatedLink>
          <TranslatedLink
            className="clickable-link"
            href={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "soba-sa-dodatnim-lezajem" },
            }}
          >
            {t.common.roomWithExtraBed}
          </TranslatedLink>
          <TranslatedLink
            className="clickable-link"
            href={{
              pathname: "/usluge/sobe/[singleRoom]",
              query: { singleRoom: "superior-apartman-sa-djakuzijem" },
            }}
          >
            {t.common.superiorApartment}
          </TranslatedLink>
        </FooterSection>
        <FooterSection footerSectionHeading={t.common.contact}>
          <p>
            Hotel:{" "}
            <a className="clickable-link" href="tel:0651234567">
              0651234567
            </a>
          </p>
          <p>
            {t.common.restaurant}:{" "}
            <a className="clickable-link" href="tel:0651234567">
              0651234567
            </a>
          </p>
          <p>
            E-mail:{" "}
            <a
              className="clickable-link"
              href="mailto:hotelsvetionik@gmail.com"
            >
              hotelsvetionik@gmail.com
            </a>
          </p>
        </FooterSection>
      </div>
      <div className="footer__social">
        <a
          className="clickable-link social"
          href="https://www.facebook.com/profile.php?id=100063594339967"
          rel="noreferrer"
          target="_blank"
        >
          <Image src={facebook} alt="Facebook logo" />
          <span>Svetionik Obrenovac na Savi</span>
        </a>
        <a
          className="clickable-link social"
          href="https://www.instagram.com/svetionik_obrenovac_na_savi/"
          rel="noreferrer"
          target="_blank"
        >
          <Image src={instagram} alt="Instagram logo" />
          <span>svetionik_obrenovac_na_savi</span>
        </a>
      </div>

      <span className="footer__rightsreserved">
        &copy; Hotel Svetionik Obrenovac. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
