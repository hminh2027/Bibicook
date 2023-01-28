const bannerService = require("../services/banner.service");
const ApiError = require("../utils/api-error");

const saveBanners = async (req, res, next) => {
  try {
    const banners = req.body;
    const result = await bannerService.saveBanners(banners);
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getBanners = async (req, res, next) => {
  const banners = await bannerService.getBanners();
  return res.status(200).json(banners);
};

module.exports = { saveBanners, getBanners };
