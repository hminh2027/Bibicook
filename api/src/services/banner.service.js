const { prisma } = require("../database/prisma-client");

const getBanners = async () => {
  return await prisma.slides.findMany();
};
const createBanner = async ({ fileName, url, index = 1 }) => {
  const alt = fileName.split(".")[0];
  return await prisma.slides.create({
    data: {
      alt,
      url,
      index: parseInt(index),
    },
  });
};

module.exports = {
  getBanners,
  createBanner,
};
