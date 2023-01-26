const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");

const getMedias = async (req, res, next) => {
  return [];
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
