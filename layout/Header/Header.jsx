import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/svg/logo.svg";
import flagSerbia from "../../public/svg/32px-Flag_of_Serbia.svg.png";
import flagBritain from "../../public/svg/english.png";
import phone from "../../public/svg/mobile.svg";
import location from "../../public/svg/location.svg";
import clock from "../../public/svg/clock2.svg";
import sr from "../../locales/sr";
import en from "../../locales/en";

const Header = ({ openForm }) => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);
  const [isServicesListOpened, setIsServicesListOpened] = useState(false);
  const [isRoomsListOpened, setIsRoomsListOpened] = useState(false);

  const { locale, push } = useRouter();
  const t = locale === "sr" ? sr : en;
  const setLocale = (l) => {
    push("", null, { locale: l });
  };

  return (
    <header className="header">
      <address className="header__address">
        <div className="header__address--container">
          <div className="header__address--card">
            <div className="header__address--card--image">
              <Image src={phone} alt="phone" />
            </div>
            <Link href="tel:065123457">0651234567</Link>
          </div>
          <div className="header__address--card">
            <div className="header__address--card--image">
              <Image src={location} alt="phone" />
            </div>
            <Link
              href="https://goo.gl/maps/4wsqikzjxaRH22zQ7"
              rel="noreferrer"
              target="_blank"
            >
              Zabreških partizana 30, Obrenovac
            </Link>
          </div>
          <div className="header__address--card">
            <div className="header__address--card--image">
              <Image src={clock} alt="phone" />
            </div>
            <div className="header__address--card--work-time">
              <span>
                {t.common.workingDays}: <time>08:00</time> -<time>23:00</time>
              </span>
            </div>
          </div>
        </div>
      </address>
      <div className="header__language">
        <button onClick={() => setLocale("sr")}>
          <Image src={flagSerbia} alt="Serbian flag" />
        </button>

        <button onClick={() => setLocale("en")}>
          <Image src={flagBritain} alt="British flag" />
        </button>
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation--items">
          <li className="header__navigation--item">
            <Link href="/o-nama" className="header__navigation--item-link">
              {t.common.aboutUs}
            </Link>
          </li>
          <li className="header__navigation--item header__navigation--item--services">
            <Link
              href="/usluge"
              className="header__navigation--item-link header__navigation--item-link--services"
            >
              {t.common.services}
            </Link>
            <span className="header__navigation--item-link--services--arrow">
              &#9658;
            </span>

            <ul className="header__navigation--item-link--services--list">
              <li className="header__navigation--item-link--services--list-item header__navigation--rooms">
                <Link href="/usluge/sobe">{t.common.rooms} &#9658;</Link>
                <ul className="header__navigation--rooms--list">
                  <li className="header__navigation--rooms--room">
                    <Link
                      href={{
                        pathname: "/usluge/sobe/[singleRoom]",
                        query: { singleRoom: "standardna-soba" },
                      }}
                      className="header__navigation--rooms--room-link"
                    >
                      {t.common.standardRoom}
                    </Link>
                  </li>
                  <li className="header__navigation--rooms--room">
                    <Link
                      href={{
                        pathname: "/usluge/sobe/[singleRoom]",
                        query: { singleRoom: "soba-sa-dodatnim-lezajem" },
                      }}
                      className="header__navigation--rooms--room-link"
                    >
                      {t.common.roomWithExtraBed}
                    </Link>
                  </li>
                  <li className="header__navigation--rooms--room">
                    <Link
                      href={{
                        pathname: "/usluge/sobe/[singleRoom]",
                        query: {
                          singleRoom: "superior-apartman-sa-djakuzijem",
                        },
                      }}
                      className="header__navigation--rooms--room-link"
                    >
                      {t.common.superiorApartment}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="header__navigation--item-link--services--list-item">
                <Link href="/usluge/proslave">{t.common.celebrations}</Link>
              </li>
              <li className="header__navigation--item-link--services--list-item">
                <Link href="/usluge/restoran">{t.common.restaurant}</Link>
              </li>
              <li className="header__navigation--item-link--services--list-item">
                <Link href="/usluge/brodska-marina">{t.common.shipMarina}</Link>
              </li>
              <li className="header__navigation--item-link--services--list-item">
                <Link href="/usluge/vinski-podrum">{t.common.wineCellar} </Link>
              </li>
            </ul>
          </li>

          <li className="header__navigation--item">
            <Link href="/galerija" className="header__navigation--item-link">
              {t.common.gallery}
            </Link>
          </li>
          <li className="header__navigation--item header__navigation--item--logo">
            <Link
              href="/"
              className="header__navigation--item-link header__navigation--item-link--logo"
            >
              <div className="header__navigation--logo">
                <Image
                  className="header__navigation--image"
                  src={logo}
                  alt="Hotel Svetionik logo"
                />
              </div>
            </Link>
          </li>
          <li className="header__navigation--item">
            <Link href="/vesti" className="header__navigation--item-link">
              {t.common.news}
            </Link>
          </li>

          <li className="header__navigation--item">
            <Link href="/kontakt" className="header__navigation--item-link">
              {t.common.contact}
            </Link>
          </li>
          <li className="header__navigation--item">
            <Link
              href=""
              className="header__navigation--item-link"
              onClick={openForm}
            >
              {t.common.booking}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mobileheader__content">
        <Link className="mobileheader__logo" href="/">
          <Image src={logo} alt="Hotel Svetionik logo" />
        </Link>
        <nav className="mobileheader__navigation">
          <div className="mobileheader__navigation--hamburger">
            <input
              onChange={() => {}}
              id="hamburger-toggle"
              className="mobileheader__navigation--hamburger--toggle"
              type="checkbox"
              checked={isHamburgerOpened ? true : false}
            />
            <label
              htmlFor="hamburger-toggle"
              onClick={() => {
                if (isHamburgerOpened) {
                  setIsHamburgerOpened(false);
                  setIsServicesListOpened(false);
                  setIsRoomsListOpened(false);
                } else setIsHamburgerOpened(true);
              }}
              className="mobileheader__navigation--hamburger--button"
            >
              <span></span>
            </label>

            <ul className="mobileheader__navigation--list">
              <li className="mobileheader__navigation--list-item">
                <Link
                  href="/"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.aboutUs}
                </Link>
              </li>
              <li className="mobileheader__navigation--list-item mobileheader__navigation--services">
                <input
                  onChange={() => {}}
                  checked={isHamburgerOpened ? isServicesListOpened : false}
                  type="checkbox"
                  id="services--toggle"
                />
                <div>
                  <Link
                    href="/"
                    className="mobileheader__navigation--list-item-link"
                  >
                    {t.common.services}
                  </Link>
                  <label
                    htmlFor="services--toggle"
                    className="mobileheader__navigation--list--arrow mobileheader__navigation--list-services--arrow"
                    onClick={() =>
                      setIsServicesListOpened(!isServicesListOpened)
                    }
                  >
                    &#9658;
                  </label>
                </div>

                <ul className="mobileheader__navigation--list">
                  <li className="mobileheader__navigation--list-item mobileheader__navigation--rooms">
                    <input
                      type="checkbox"
                      id="rooms--toggle"
                      onChange={() => {}}
                      checked={isHamburgerOpened ? isRoomsListOpened : false}
                    />
                    <div>
                      <Link
                        href="/"
                        className="mobileheader__navigation--list-item-link "
                      >
                        {t.common.roomsBooking}
                      </Link>

                      <label
                        htmlFor="rooms--toggle"
                        className="mobileheader__navigation--list--arrow"
                        onClick={() => setIsRoomsListOpened(!isRoomsListOpened)}
                      >
                        &#9658;
                      </label>
                    </div>

                    <ul className="mobileheader__navigation--list mobileheader__navigation--list-rooms">
                      <li className="mobileheader__navigation--list-item">
                        <Link
                          href="/"
                          className="mobileheader__navigation--list-item-link"
                        >
                          {t.common.standardRoom}
                        </Link>
                      </li>
                      <li className="mobileheader__navigation--list-item">
                        <Link
                          href="/"
                          className="mobileheader__navigation--list-item-link"
                        >
                          {t.common.roomWithExtraBed}{" "}
                        </Link>
                      </li>
                      <li className="mobileheader__navigation--list-item">
                        <Link
                          href="/"
                          className="mobileheader__navigation--list-item-link"
                        >
                          {t.common.superiorApartment}{" "}
                        </Link>
                      </li>
                      <li
                        className="mobileheader__navigation--list-item"
                        onClick={() => setIsRoomsListOpened(false)}
                      >
                        <label
                          className="mobileheader__navigation--list--arrow"
                          htmlFor="rooms--toggle"
                        >
                          &larr;
                        </label>
                        <span className="mobileheader__navigation--list--go-back">
                          {t.buttons.goBack}
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mobileheader__navigation--list-item">
                    <Link
                      href="/"
                      className="mobileheader__navigation--list-item-link"
                    >
                      {t.common.weddingCelebrations}
                    </Link>
                  </li>
                  <li className="mobileheader__navigation--list-item">
                    <Link
                      href="/"
                      className="mobileheader__navigation--list-item-link"
                    >
                      {t.common.restaurant}
                    </Link>
                  </li>
                  <li className="mobileheader__navigation--list-item">
                    <Link
                      href="/"
                      className="mobileheader__navigation--list-item-link"
                    >
                      {t.common.wineCellar}
                    </Link>
                  </li>
                  <li className="mobileheader__navigation--list-item">
                    <Link
                      href="/"
                      className="mobileheader__navigation--list-item-link"
                    >
                      {t.common.shipMarina}
                    </Link>
                  </li>
                  <li
                    className="mobileheader__navigation--list-item "
                    onClick={() => setIsServicesListOpened(false)}
                  >
                    <label
                      className="mobileheader__navigation--list--arrow"
                      htmlFor="services--toggle"
                    >
                      &larr;
                    </label>
                    <span className="mobileheader__navigation--list--go-back">
                      {t.buttons.goBack}
                    </span>
                  </li>
                </ul>
              </li>
              <li className="mobileheader__navigation--list-item">
                <Link
                  href="/"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.gallery}
                </Link>
              </li>
              <li className="mobileheader__navigation--list-item">
                <Link
                  href="/"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.news}
                </Link>
              </li>
              <li className="mobileheader__navigation--list-item">
                <Link
                  href="/"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.contact}
                </Link>
              </li>
              <li className="mobileheader__navigation--list-item">
                <Link
                  href="/"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.booking}
                </Link>
              </li>
              <li className="mobileheader__navigation--list-item">
                <div className="mobileheader__navigation--language">
                  <button onClick={() => setLocale("sr")}>
                    <Image src={flagSerbia} alt="Serbian flag" />
                  </button>

                  <button onClick={() => setLocale("en")}>
                    <Image src={flagBritain} alt="British flag" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
