const { prisma } = require("../database/prisma-client");

const createMedia = async ({ url, fileName, size }) => {
  const media = await prisma.medias.create({
    data: {
      name: fileName,
      alt: fileName,
      url,
      size,
    },
  });
  return media;
};

module.exports = { createMedia };
