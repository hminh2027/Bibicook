const { prisma } = require("../database/prisma-client");

const getBanners = async () => {
  return await prisma.banners.findMany();
};

const createBanner = async ({ url, fileName, size }) => {
  const banner = await prisma.medias.create({
    data: {
      url,
      size,
      name: fileName,
      alt: fileName,
      Banners: {
        create: {},
      },
    },
  });
  return banner;
};

module.exports = {
  getBanners,
  createBanner,
};
