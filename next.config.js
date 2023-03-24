/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,

  async rewrites() {
    return [
      {
        source: "/en/about-us",
        destination: "/en/o-nama",
        locale: false,
      },
      {
        source: "/en/services",
        destination: "/en/usluge",
        locale: false,
      },
      {
        source: "/en/gallery",
        destination: "/en/galerija",
        locale: false,
      },
      {
        source: "/en/contact",
        destination: "/en/contact",
        locale: false,
      },
      {
        source: "/en/news",
        destination: "/en/vesti",
        locale: false,
      },
      {
        source: "/en/services/rooms",
        destination: "/en/usluge/sobe",
        locale: false,
      },
      {
        source: "/en/services/celebrations",
        destination: "/en/usluge/proslave",
        locale: false,
      },
      {
        source: "/en/services/boat-marina",
        destination: "/en/usluge/brodska-marina",
        locale: false,
      },
      {
        source: "/en/services/wine-cellar",
        destination: "/en/usluge/vinski-podrum",
        locale: false,
      },
      {
        source: "/en/services/rooms/standard-room",
        destination: "/en/usluge/sobe/standardna-soba",
        locale: false,
      },
      {
        source: "/en/services/rooms/room-with-extra-bed",
        destination: "/en/usluge/sobe/soba-sa-dodatnim-lezajem",
        locale: false,
      },
      {
        source: "/en/services/rooms/superior-apartment-with-jacuzzi",
        destination: "/en/usluge/sobe/superior-apartman-sa-djakuzijem",
        locale: false,
      },
      {
        source: "/en/gallery#rooms",
        destination: "/en/galerija#sobe",
        locale: false,
      },
      {
        source: "/en/gallery#celebrations",
        destination: "/en/galerija#proslave",
        locale: false,
      },
      {
        source: "/en/gallery#restaurant",
        destination: "/en/galerija#restoran",
        locale: false,
      },
      {
        source: "/en/gallery#wine-cellar",
        destination: "/en/galerija#vinski-podrum",
        locale: false,
      },
      {
        source: "/en/gallery#awards",
        destination: "/en/galerija#nagrade",
        locale: false,
      },
      {
        source: "/en/gallery#food",
        destination: "/en/galerija#hrana",
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
