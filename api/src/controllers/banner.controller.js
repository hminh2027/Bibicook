const bannerService = require("../services/banner.service");

const createBanner = async (req, res, next) => {
  const {
    file: { url, fileName },
    body: { index },
  } = req;

  const banner = await bannerService.createBanner({ fileName, url, index });
  res.status(200).json(banner);
};
const getBanners = async (req, res, next) => {
  const banners = await bannerService.getBanners();
  return res.status(200).json(banners);
};

module.exports = { createBanner, getBanners };
