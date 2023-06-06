const httpStatus = require("http-status");
const mediaService = require("../services/media.service");

const createMedia = async (req, res, next) => {
  const { buffer, originalname } = req.file;
  // const { fileName, size, url } = await writeFile(buffer, originalname);

  // try {
  //   const media = await mediaService.createMedia({ url, fileName, size });
  //   res.status(httpStatus.CREATED).json({
  //     message: "Upload ảnh thành công!",
  //     data: media,
  //   });
  // } catch (error) {
  //   // TODO: chưa dùng được vì nó xóa ngay khi có lỗi (ảnh chưa được tạo)
  //   // deleteFile(fileName);
  //   next(error);
  // }
};

module.exports = { createMedia };
