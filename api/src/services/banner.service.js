const { prisma, Prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");

const getBanners = async () => {
  return await prisma.banners.findMany();
};
const saveBanners = async (banners) => {
  try {
    await prisma.banners.deleteMany();
    return await prisma.banners.createMany({
      data: banners.map((banner) => {
        return {
          url: banner.url,
        };
      }),
    });
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
  saveBanners,
};
