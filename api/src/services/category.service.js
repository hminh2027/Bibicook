const httpStatus = require("http-status");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");
const { slugify } = require("../utils/slugify");

const getCategories = async () => {
  return await prisma.categories.findMany({
    include: {
      _count: {
        select: {
          Products: true,
        },
      },
    },
  });
};

const getCategoryByName = async ({ name }) => {
  return await prisma.categories.findUnique({ where: { name } });
};

// TODO: check unique constraint và catch auto
const createCategory = async ({ name }) => {
  const categoryNotUnique = await getCategoryByName({ name });
  if (categoryNotUnique)
    throw new ApiError(httpStatus.BAD_REQUEST, "Category đã tồn tại");
  const category = await prisma.categories.create({
    data: {
      name,
      slug: slugify(name),
      desc,
    },
  });
  return category;
};

module.exports = {
  getCategories,
  createCategory,
};
