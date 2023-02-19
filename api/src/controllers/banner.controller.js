const httpStatus = require("http-status");
const bannerService = require("../services/banner.service");

const createBanners = async (req, res, next) => {
  try {
    const { banners } = req.body;
    const result = await bannerService.createBanners(banners);
    res.status(httpStatus.CREATED).json({
      message: "Tạo banner thành công!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getBanners = async (req, res, next) => {
  try {
    const banners = await bannerService.getBanners();
    res.status(httpStatus.OK).json(banners);
  } catch (error) {
    next(error);
  }
};
const removeBanner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await bannerService.removeBanner(id);
    res.status(httpStatus.OK).json({
      message: "Xoá banner thành công!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBanners, createBanners, removeBanner };
