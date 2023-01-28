const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");

const getMedias = async () => {
  try {
    return await prisma.medias.findMany();
  } catch (error) {
    throw new ApiError(404, "Failed");
  }
};
const getMedia = async (url) => {
  try {
    return await prisma.medias.findFirst({
      where: {
        url,
      },
    });
  } catch (error) {
    throw new ApiError(404, "Mo media found");
  }
};
const createMedia = async (fileName, size, url) => {
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
    // if (error instanceof PrismaClientKnownRequestError) {
    // }
    console.log(error);
    throw new ApiError(200, "Failed");
  }
};
module.exports = { createMedia, getMedias };
