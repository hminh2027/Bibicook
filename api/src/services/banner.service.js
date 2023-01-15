const { prisma } = require("../database/prisma-client");

const getBanners = async () => {
  return [
    {
      url: "google.com",
      index: 1,
      alt: "temp banner",
    },
    {
      url: "bing.com",
      index: 2,
      alt: "temp banner 2",
    },
  ];
};

module.exports = {
  getBanners,
};
