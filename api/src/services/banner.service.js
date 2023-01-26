const { prisma, Prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");

const getBanners = async () => {
  return await prisma.slides.findMany();
};
const createBanners = async ({ fileName, url, size, index = 1 }) => {
  try {
    const res = await prisma.banners.create({
      data: {
        name: fileName,
        BannerMedias: {
          connect: {
            bannersName_mediasUrl: url,
          },
        },
      },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        console.log("There is a unique constraint violation");
      }
      throw new ApiError(400, "Lỗi khi chạy banner service");
    }
  }
};

module.exports = {
  getBanners,
  createBanners,
};
