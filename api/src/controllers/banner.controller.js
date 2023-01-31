const httpStatus = require("http-status");
const bannerService = require("../services/banner.service");

const { writeFile, deleteFile } = require("../utils/file-helper");

const createBanner = async (req, res, next) => {
  const { buffer, originalname } = req.file;
  const { fileName, size, url } = await writeFile(buffer, originalname);

  try {
    const banner = await bannerService.createBanner({ url, fileName, size });
    res.status(httpStatus.CREATED).json({
      message: "Tạo banner thành công!",
      data: banner,
    });
  } catch (error) {
    // TODO: chưa dùng được vì nó xóa ngay khi có lỗi (ảnh chưa được tạo)
    // deleteFile(fileName);
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
