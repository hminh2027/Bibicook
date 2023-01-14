const bannerService = require("../services/banner.service");

const createBanner = async (req, res, next) => {
  const { files } = req;
  console.log(files);
  res.status(200).json({});
};
const getBanners = async (req, res, next) => {
  const banners = await bannerService.getBanners();
  return res.status(200).json(banners);
};

module.exports = { createBanner, getBanners };
