import { useState } from "react";
import TranslatedLink from "../../components/TranslatedLink/TranslatedLink";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/svg/hotel-svetionik-logo-white.svg";
import flagSerbia from "../../public/svg/32px-Flag_of_Serbia.svg.png";
import flagBritain from "../../public/svg/english.png";
import phone from "../../public/svg/mobile.svg";
import location from "../../public/svg/location.svg";
import clock from "../../public/svg/clock2.svg";
import sr from "../../locales/sr";
import en from "../../locales/en";

import {
  displayedInfoPhoneNumber,
  infoPhoneNumber,
} from "../../data/hotelData";

const Header = ({ openForm }) => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);
  const [isServicesListOpened, setIsServicesListOpened] = useState(false);
  const [isRoomsListOpened, setIsRoomsListOpened] = useState(false);

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
    <header className="header">
      <address className="header__address">
        <div className="header__address--container">
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
            <TranslatedLink
              href="/"
            >
                <Image
                  className="header__logo"
                  src={logo}
                  width={'auto'}
                  height={50}
                  alt="Hotel Svetionik logo"
                />
            </TranslatedLink>
        <ul className="header__navigation--items">
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
            <span className="header__navigation--item-link--services--arrow">
              &#9658;
            </span>

            <ul className="header__navigation--item-link--services--list">
              <li className="header__navigation--item-link--services--list-item header__navigation--rooms">
                <TranslatedLink href="/usluge/sobe">
                  {t.common.rooms} &#9658;
                </TranslatedLink>
                <ul className="header__navigation--rooms--list">
                  <li className="header__navigation--rooms--room">
                    <TranslatedLink
                      href="/usluge/sobe/standardna-soba"
                      className="header__navigation--rooms--room-link"
                    >
                      {t.common.standardRoom}
                    </TranslatedLink>
                  </li>
                  <li className="header__navigation--rooms--room">
                    <TranslatedLink
                      href="/usluge/sobe/soba-sa-dodatnim-lezajem"
                      className="header__navigation--rooms--room-link"
                    >
                      {t.common.roomWithExtraBed}
                    </TranslatedLink>
                  </li>
                  <li className="header__navigation--rooms--room">
                    <TranslatedLink
                      href="/usluge/sobe/superior-apartman-sa-djakuzijem"
                      className="header__navigation--rooms--room-link"
                    >
                      {t.common.superiorApartment}
                    </TranslatedLink>
                  </li>
                </ul>
              </li>
              <li className="header__navigation--item-link--services--list-item">
                <TranslatedLink href="/usluge/proslave">
                  {t.common.celebrations}
                </TranslatedLink>
              </li>
              <li className="header__navigation--item-link--services--list-item">
                <TranslatedLink href="/usluge/restoran">
                  {t.common.restaurant}
                </TranslatedLink>
              </li>
              <li className="header__navigation--item-link--services--list-item">
                <TranslatedLink href="/usluge/brodska-marina">
                  {t.common.shipMarina}
                </TranslatedLink>
              </li>
              <li className="header__navigation--item-link--services--list-item">
                <TranslatedLink href="/usluge/vinski-podrum">
                  {t.common.wineCellar}{" "}
                </TranslatedLink>
              </li>
            </ul>
          </li>

          <li className="header__navigation--item">
            <TranslatedLink
              href="/galerija"
              className="header__navigation--item-link"
            >
              {t.common.gallery}
            </TranslatedLink>
          </li>
         
          {/* <li className="header__navigation--item">
            <TranslatedLink
              href="/vesti"
              className="header__navigation--item-link"
            >
              {t.common.news}
            </TranslatedLink>
          </li> */}

          <li className="header__navigation--item">
            <TranslatedLink
              href="/kontakt"
              className="header__navigation--item-link"
            >
              {t.common.contact}
            </TranslatedLink>
          </li>
          <li className="header__navigation--item">
            <TranslatedLink
              href=""
              className="header__navigation--item-link"
              onClick={openForm}
            >
              {t.common.booking}
            </TranslatedLink>
          </li>
        </ul>

        <div className="header__language">
        <button onClick={() => setLocale("sr")}>
          <Image src={flagSerbia} alt="Serbian flag" />
        </button>

        <button onClick={() => setLocale("en")}>
          <Image src={flagBritain} alt="British flag" />
        </button>
      </div>
      </nav>

      <div className="mobileheader__content">
        <TranslatedLink
          className="mobileheader__logo"
          href="/"
          onClick={closeHamburgerMenu}
        >
          <Image src={logo} alt="Hotel Svetionik logo" />
        </TranslatedLink>
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
                <div>
                  <TranslatedLink
                    onClick={closeHamburgerMenu}
                    href="/usluge"
                    className="mobileheader__navigation--list-item-link"
                  >
                    {t.common.services}
                  </TranslatedLink>
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
                  <li className="mobileheader__navigation--heading">
                    {t.common.services}
                  </li>
                  <li className="mobileheader__navigation--list-item mobileheader__navigation--rooms">
                    <input
                      type="checkbox"
                      id="rooms--toggle"
                      onChange={() => {}}
                      checked={isHamburgerOpened ? isRoomsListOpened : false}
                    />
                    <div>
                      <TranslatedLink
                        onClick={closeHamburgerMenu}
                        href="/usluge/sobe"
                        className="mobileheader__navigation--list-item-link "
                      >
                        {t.common.roomsBooking}
                      </TranslatedLink>

                      <label
                        htmlFor="rooms--toggle"
                        className="mobileheader__navigation--list--arrow"
                        onClick={() => setIsRoomsListOpened(!isRoomsListOpened)}
                      >
                        &#9658;
                      </label>
                    </div>

                    <ul className="mobileheader__navigation--list mobileheader__navigation--list-rooms">
                      <li className="mobileheader__navigation--heading">
                        {t.common.roomsBooking}
                      </li>
                      <li className="mobileheader__navigation--list-item">
                        <TranslatedLink
                          onClick={closeHamburgerMenu}
                          href="/usluge/sobe/standardna-soba"
                          className="mobileheader__navigation--list-item-link"
                        >
                          {t.common.standardRoom}
                        </TranslatedLink>
                      </li>
                      <li className="mobileheader__navigation--list-item">
                        <TranslatedLink
                          onClick={closeHamburgerMenu}
                          href="/usluge/sobe/soba-sa-dodatnim-lezajem"
                          className="mobileheader__navigation--list-item-link"
                        >
                          {t.common.roomWithExtraBed}
                        </TranslatedLink>
                      </li>
                      <li className="mobileheader__navigation--list-item">
                        <TranslatedLink
                          onClick={closeHamburgerMenu}
                          href="/usluge/sobe/superior-apartman-sa-djakuzijem"
                          className="mobileheader__navigation--list-item-link"
                        >
                          {t.common.superiorApartment}
                        </TranslatedLink>
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
                    <TranslatedLink
                      onClick={closeHamburgerMenu}
                      href="/usluge/proslave"
                      className="mobileheader__navigation--list-item-link"
                    >
                      {t.common.weddingCelebrations}
                    </TranslatedLink>
                  </li>
                  <li className="mobileheader__navigation--list-item">
                    <TranslatedLink
                      onClick={closeHamburgerMenu}
                      href="/usluge/restoran"
                      className="mobileheader__navigation--list-item-link"
                    >
                      {t.common.restaurant}
                    </TranslatedLink>
                  </li>
                  <li className="mobileheader__navigation--list-item">
                    <TranslatedLink
                      onClick={closeHamburgerMenu}
                      href="/usluge/vinski-podrum"
                      className="mobileheader__navigation--list-item-link"
                    >
                      {t.common.wineCellar}
                    </TranslatedLink>
                  </li>
                  <li className="mobileheader__navigation--list-item">
                    <TranslatedLink
                      onClick={closeHamburgerMenu}
                      href="/usluge/brodska-marina"
                      className="mobileheader__navigation--list-item-link"
                    >
                      {t.common.shipMarina}
                    </TranslatedLink>
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
                  href="/vesti"
                  className="mobileheader__navigation--list-item-link"
                >
                  {t.common.news}
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
