const httpStatus = require("http-status");
const bannerService = require("../services/banner.service");

const { imageMinify } = require("../utils/file-helper");

const createBanner = async (req, res, next) => {
  try {
    const { buffer, originalname } = req.file;
    const { fileName, size, url } = await imageMinify(buffer, originalname);

    const banner = await bannerService.createBanner({ url, fileName, size });

    res.status(httpStatus.CREATED).json({
      message: "Tạo banner thành công!",
      data: banner,
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

module.exports = { getBanners, createBanner };
