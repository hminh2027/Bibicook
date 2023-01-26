const bannerService = require("../services/banner.service");
const ApiError = require("../utils/api-error");

const createBanners = async (req, res, next) => {
  const { files } = req;
  try {
    const bannerPromises = await Promise.allSettled(
      files?.map(async (file) => {
        const { fileName, url, index, size } = file;
        await bannerService.createBanners({ fileName, url, index, size });
      })
    );
    if (bannerPromises.some((promise) => promise.status === "rejected")) {
      throw new ApiError(500, "Lỗi thêm slide vào db");
    }
    const banners = bannerPromises.map((banner) => banner.value);
    return res.status(200).json(bannerPromises);
  } catch (e) {
    next(e);
  }
};

const getBanners = async (req, res, next) => {
  const banners = await bannerService.getBanners();
  return res.status(200).json(banners);
};

module.exports = { createBanners, getBanners };
