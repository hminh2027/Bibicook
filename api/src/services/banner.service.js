const { prisma } = require("../database/prisma-client");
const _ = require("lodash");
const getBanners = async () => {
  return await prisma.banners.findMany();
};

const createBanners = async (banners) => {
  // Remove all existing banners before creating new
  await prisma.banners.deleteMany();
  // Delete empty object in array
  const validBanners = _.reject(
    banners.map((banner) => _.pickBy(banner, _.identity)),
    _.isEmpty
  );
  return await prisma.banners.createMany({
    data: validBanners.map((banner) => ({ url: banner.url })),
  });
};
const removeBanner = async (id) => {
  return await prisma.banners.delete({
    where: {
      id,
    },
  });
};
module.exports = {
  getBanners,
  createBanners,
  removeBanner,
};
