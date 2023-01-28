const ApiError = require("../utils/api-error");
const mediaService = require("../services/media.service");
const { imageMinify } = require("../utils/image-minify");
const getMedias = async (req, res, next) => {
  const medias = await mediaService.getMedias();
  res.status(200).json(medias);
};
const createMedia = async (req, res, next) => {
  try {
    const { buffer, originalname } = req.file;
    const { fileName, size, url } = await imageMinify(buffer, originalname);
    const result = await mediaService.createMedia(fileName, size, url);
    res.status(200).json({ ...result, status: "success" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ status: "failed" });
  }
};
module.exports = { createMedia, getMedias };
