const ApiError = require("../utils/api-error");
const mediaService = require("../services/media.service");
const getMedias = async (req, res, next) => {
  res.status(200).json([]);
};
const createMedia = async (req, res, next) => {
  try {
    const { fileName, size, url } = req.file;
    const result = await mediaService.createMedia({ fileName, size, url });
    res.status(200).json({ ...result, status: "success" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ status: "failed" });
  }
};
module.exports = { createMedia, getMedias };
