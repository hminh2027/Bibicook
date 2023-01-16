const bannerService = require("../services/banner.service");

const createBanners = async (req, res, next) => {
  const { files } = req;
  // const banner = await bannerService.createBanners({ fileName, url, index });
  // res.status(200).json(banner);
  res.status(200).json(files);
};

const getBanners = async (req, res, next) => {
  const banners = await bannerService.getBanners();
  return res.status(200).json(banners);
};

module.exports = { createBanners, getBanners };
