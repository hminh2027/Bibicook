const httpStatus = require("http-status");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/apiError");
const checkUnique = require("../utils/checkUnique");

const model = prisma.category;

const createOne = async ({ name }) => {
  const unique = await checkUnique({ model, data: { name } });
  if (!unique)
    throw new ApiError(httpStatus.BAD_REQUEST, "Thể loại đã tồn tại");
  return prisma.category.create({ data: { name } });
};

const getMany = () => {
  return prisma.category.findMany();
};

const getOneByName = (name) => {
  return prisma.category.findFirst({ where: { name } });
};

const updateOneById = ({ id, name }) => {
  return prisma.category.update({ where: { id }, data: { name } });
};

const removeOneById = async ({ id }) => {
  const cate = await getOneByName({ model, data: { id } });
  if (!cate)
    throw new ApiError(httpStatus.BAD_REQUEST, "Thể loại không tồn tại");

  return prisma.categories.delete({
    where: { id: cate.id },
  });
};

module.exports = {
  createOne,
  getMany,
  updateOneById,
  removeOneById,
};
