import { useEffect, useRef, useState } from "react";
import TranslatedLink from "../../components/TranslatedLink/TranslatedLink";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/svg/hotel-svetionik-logo-white.svg";
import flagSerbia from "../../public/svg/32px-Flag_of_Serbia.svg.png";
import flagBritain from "../../public/svg/english.png";
import phone from "../../public/svg/mobile.svg";
import location from "../../public/svg/location.svg";
import clock from "../../public/svg/clock2.svg";
import facebook from "../../public/svg/facebook.svg";
import instagram from "../../public/svg/instagram.svg";
import sr from "../../locales/sr";
import en from "../../locales/en";

import {
  bookingPhoneNumber,
  displayedBookingPhoneNumber,
  displayedInfoPhoneNumber,
  displayedRestaurantPhoneNumber,
  hotelEmailAddress,
  infoPhoneNumber,
  restaurantPhoneNumber,
} from "../../data/hotelData";
import ServicesSubmenu from "../../components/ServicesSubmenu/ServicesSubmenu";

const Header = ({ openForm }) => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);
  const [isServicesListOpened, setIsServicesListOpened] = useState(false);
  const [isRoomsListOpened, setIsRoomsListOpened] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const servicesSubmenuHeight = useRef();
  const roomsSubmenuHeight = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeHamburgerMenu = () => {
    if (isServicesListOpened) {
      setIsServicesListOpened(false);
    }
    if (isRoomsListOpened) {
      setIsRoomsListOpened(false);
    }

    setIsHamburgerOpened(false);
  };

  const { locale, push } = useRouter();
  const t = locale === "sr" ? sr : en;
  const setLocale = (l) => {
    push("", null, { locale: l });
  };

  return (
    <header className={scrolling ? "header header--scrolled" : "header"}>
      <address className="header__address">
        <div className="header__address--container container">
          <div className="header__address--card">
            <div className="header__address--card--image">
              <Image src={phone} alt="phone" />
            </div>
            <a href={`tel:${infoPhoneNumber}`}>{displayedInfoPhoneNumber}</a>
          </div>
          <div className="header__address--card">
            <div className="header__address--card--image">
              <Image src={location} alt="phone" />
            </div>
            <a
              href="https://goo.gl/maps/4wsqikzjxaRH22zQ7"
              rel="noreferrer"
              target="_blank"
            >
              Zabreških partizana 30, Obrenovac
            </a>
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

      <nav className="header__navigation container">
        <ul className="header__navigation--items">
          <li className="header__navigation--item">
            <TranslatedLink href="/" className="header__navigation--item-link">
              {t.common.home}
            </TranslatedLink>
          </li>
          <li className="header__navigation--item">
            <TranslatedLink
              href="/o-nama"
              className="header__navigation--item-link"
            >
              {t.common.aboutUs}
            </TranslatedLink>
          </li>
          <li className="header__navigation--item header__navigation--item--services">
            <TranslatedLink
              href="/usluge"
              className="header__navigation--item-link header__navigation--item-link--services"
            >
              {t.common.services}
            </TranslatedLink>
            <span className="down-arrow"></span>

            <ServicesSubmenu />
          </li>

          <li className="header__navigation--item">
            <TranslatedLink
              href="/galerija"
              className="header__navigation--item-link"
            >
              {t.common.gallery}
            </TranslatedLink>
          </li>

          <li className="header__navigation--item">
            <TranslatedLink
              href="/kontakt"
              className="header__navigation--item-link"
            >
              {t.common.contact}
            </TranslatedLink>
          </li>
        </ul>
        <div className="header__main-logo">
          <TranslatedLink href="/">
            <Image
              className="header__logo"
              src={logo}
              width={"auto"}
              height={50}
              alt="Hotel Svetionik logo"
            />
          </TranslatedLink>
        </div>

        <div className="header__language-and-reservation">
          <button
            className="header__reservation-button"
            type="button"
            onClick={openForm}
          >
            {t.common.booking}
          </button>
          <div className="header__language">
            <button onClick={() => setLocale("sr")}>
              <Image src={flagSerbia} alt="Serbian flag" />
            </button>

            <button onClick={() => setLocale("en")}>
              <Image src={flagBritain} alt="British flag" />
            </button>
          </div>
        </div>
      </nav>

      <div className="mobileheader__content">
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
                <TranslatedLink
                  onClick={closeHamburgerMenu}
                  href="/"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.home}
                </TranslatedLink>
              </li>
              <li className="mobileheader__navigation--list-item">
                <TranslatedLink
                  onClick={closeHamburgerMenu}
                  href="/o-nama"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.aboutUs}
                </TranslatedLink>
              </li>
              <li className="mobileheader__navigation--list-item mobileheader__navigation--services">
                <input
                  onChange={() => {}}
                  checked={isHamburgerOpened ? isServicesListOpened : false}
                  type="checkbox"
                  id="services--toggle"
                />
                <div className="subservice-test">
                  <TranslatedLink
                    onClick={closeHamburgerMenu}
                    href="/usluge"
                    className="mobileheader__navigation--list-item-link"
                  >
                    {t.common.services}
                  </TranslatedLink>
                  <label
                    htmlFor="services--toggle"
                    className={
                      isServicesListOpened
                        ? "mobileheader__navigation--list--arrow mobileheader__navigation--list--arrow--opened"
                        : "mobileheader__navigation--list--arrow"
                    }
                    onClick={() =>
                      setIsServicesListOpened(!isServicesListOpened)
                    }
                  >
                    &#129170;
                  </label>
                </div>

                <ul
                  ref={servicesSubmenuHeight}
                  style={
                    isServicesListOpened
                      ? { height: servicesSubmenuHeight.current.scrollHeight }
                      : { height: "0px" }
                  }
                  className={
                    isServicesListOpened
                      ? "mobileheader__navigation-submenu mobileheader__navigation-submenu--opened"
                      : "mobileheader__navigation-submenu"
                  }
                >
                  <li className="mobileheader__submenu-list-item">
                    <input
                      type="checkbox"
                      id="rooms--toggle"
                      onChange={() => {}}
                      checked={isHamburgerOpened ? isRoomsListOpened : false}
                    />
                    <div className="subservice-test">
                      <TranslatedLink
                        onClick={closeHamburgerMenu}
                        href="/usluge/sobe"
                        className="mobileheader__submenu-list-item-link "
                      >
                        {t.common.roomsBooking}
                      </TranslatedLink>

                      <label
                        htmlFor="rooms--toggle"
                        className={
                          isRoomsListOpened
                            ? "mobileheader__navigation--list--arrow mobileheader__navigation--list--arrow--opened"
                            : "mobileheader__navigation--list--arrow"
                        }
                        onClick={() => setIsRoomsListOpened(!isRoomsListOpened)}
                      >
                        &#129170;
                      </label>
                    </div>

                    <ul
                      ref={roomsSubmenuHeight}
                      style={
                        isRoomsListOpened
                          ? { height: roomsSubmenuHeight.current.scrollHeight }
                          : { height: "0px" }
                      }
                      className={
                        isRoomsListOpened
                          ? "mobileheader__navigation-submenu mobileheader__navigation-submenu--opened"
                          : "mobileheader__navigation-submenu"
                      }
                    >
                      <li className="mobileheader__submenu-list-item">
                        <TranslatedLink
                          onClick={closeHamburgerMenu}
                          href="/usluge/sobe/standardna-soba"
                          className="mobileheader__submenu-list-item-link"
                        >
                          {t.common.standardRoom}
                        </TranslatedLink>
                      </li>
                      <li className="mobileheader__submenu-list-item">
                        <TranslatedLink
                          onClick={closeHamburgerMenu}
                          href="/usluge/sobe/soba-sa-dodatnim-lezajem"
                          className="mobileheader__submenu-list-item-link"
                        >
                          {t.common.roomWithExtraBed}
                        </TranslatedLink>
                      </li>
                      <li className="mobileheader__submenu-list-item">
                        <TranslatedLink
                          onClick={closeHamburgerMenu}
                          href="/usluge/sobe/superior-apartman-sa-djakuzijem"
                          className="mobileheader__submenu-list-item-link"
                        >
                          {t.common.superiorApartment}
                        </TranslatedLink>
                      </li>
                    </ul>
                  </li>
                  <li className="mobileheader__submenu-list-item">
                    <TranslatedLink
                      onClick={closeHamburgerMenu}
                      href="/usluge/proslave"
                      className="mobileheader__submenu-list-item-link"
                    >
                      {t.common.weddingCelebrations}
                    </TranslatedLink>
                  </li>
                  <li className="mobileheader__submenu-list-item">
                    <TranslatedLink
                      onClick={closeHamburgerMenu}
                      href="/usluge/restoran"
                      className="mobileheader__submenu-list-item-link"
                    >
                      {t.common.restaurant}
                    </TranslatedLink>
                  </li>
                  <li className="mobileheader__submenu-list-item">
                    <TranslatedLink
                      onClick={closeHamburgerMenu}
                      href="/usluge/vinski-podrum"
                      className="mobileheader__submenu-list-item-link"
                    >
                      {t.common.wineCellar}
                    </TranslatedLink>
                  </li>
                  <li className="mobileheader__submenu-list-item">
                    <TranslatedLink
                      onClick={closeHamburgerMenu}
                      href="/usluge/brodska-marina"
                      className="mobileheader__submenu-list-item-link"
                    >
                      {t.common.shipMarina}
                    </TranslatedLink>
                  </li>
                </ul>
              </li>
              <li className="mobileheader__navigation--list-item">
                <TranslatedLink
                  onClick={closeHamburgerMenu}
                  href="/galerija"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.gallery}
                </TranslatedLink>
              </li>
              <li className="mobileheader__navigation--list-item">
                <TranslatedLink
                  onClick={closeHamburgerMenu}
                  href="/kontakt"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.contact}
                </TranslatedLink>
              </li>
              <li className="mobileheader__navigation--list-item">
                <TranslatedLink
                  href=""
                  className="mobileheader__navigation--list-item-link"
                  onClick={() => {
                    openForm(), closeHamburgerMenu();
                  }}
                >
                  {t.common.booking}
                </TranslatedLink>
              </li>
              <li className="mobileheader__additional-info">
                <address className="mobileheader__address">
                  <span>Hotel Svetionik</span>
                  <span>Zabreških partizana 30</span>
                  <span>11500, Obrenovac</span>
                  <span>Srbija</span>
                </address>

                <a
                  href="https://goo.gl/maps/XMqbpMmLQgFx5qL29"
                  target="_blank"
                  rel="noreferrer"
                  className="backlink"
                >
                  {t.common.showMap}
                </a>
              </li>
              <li className="mobileheader__contact-info">
                <p>
                  {t.common.info}:{" "}
                  <a className="backlink" href={`tel:${infoPhoneNumber}`}>
                    {displayedInfoPhoneNumber}
                  </a>
                </p>
                <p>
                  {t.common.restaurant}:{" "}
                  <a className="backlink" href={`tel:${restaurantPhoneNumber}`}>
                    {displayedRestaurantPhoneNumber}
                  </a>
                </p>
                <p>
                  {t.common.roomsBooking}:{" "}
                  <a className="backlink" href={`tel:${bookingPhoneNumber}`}>
                    {displayedBookingPhoneNumber}
                  </a>
                </p>
                <p>
                  E-mail:{" "}
                  <a className="backlink" href={`mailto:${hotelEmailAddress}`}>
                    {hotelEmailAddress}
                  </a>
                </p>
              </li>
              <li className="mobileheader__social">
                <a
                  href="https://www.facebook.com/profile.php?id=100063594339967"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    className="mobileheader__social-image"
                    src={facebook}
                    alt="Facebook logo"
                    width={"40"}
                    height={"40"}
                  />
                </a>
                <a
                  href="https://www.instagram.com/svetionik_obrenovac_na_savi/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    className="mobileheader__social-image"
                    src={instagram}
                    alt="Instagram logo"
                    width={"40"}
                    height={"40"}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <TranslatedLink
          className="mobileheader__logo"
          href="/"
          onClick={closeHamburgerMenu}
        >
          <Image src={logo} alt="Hotel Svetionik logo" />
        </TranslatedLink>

        <div className="mobileheader__navigation--language">
          <button onClick={() => setLocale("sr")}>
            <Image src={flagSerbia} alt="Serbian flag" />
          </button>

          <button onClick={() => setLocale("en")}>
            <Image src={flagBritain} alt="British flag" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
