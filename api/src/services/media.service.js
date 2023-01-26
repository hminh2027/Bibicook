const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");

const getMedias = async (req, res, next) => {
  try {
    return await prisma.medias.findMany();
  } catch (error) {
    throw new ApiError(404, "Failed");
  }
};
const createMedia = async ({ fileName, size, url }) => {
  try {
    return await prisma.medias.create({
      data: {
        name: fileName,
        url,
        alt: fileName,
        size,
      },
    });
  } catch (error) {
    console.log(error);
    throw new ApiError(200, "Failed");
  }
};
module.exports = { createMedia, getMedias };
