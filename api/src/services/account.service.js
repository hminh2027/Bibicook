const httpStatus = require("http-status");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/apiError");
const _ = require("lodash");

const createOne = async ({ password, username }) => {
  const hasUser = await getAll();
  if (hasUser) throw new ApiError(httpStatus.BAD_REQUEST, "Admin đã tồn tại");

  return prisma.account.create({
    data: {
      password,
      username,
    },
  });
};

const getAll = () => prisma.account.findMany();

const getOneByUsername = ({ username }) => {
  return prisma.account.findFirst({
    where: { username },
  });
};

const updateOneById = (id, { password, username }) => {
  return prisma.account.update({
    where: { id },
    data: { password, username },
  });
};

module.exports = {
  createOne,
  updateOneById,
  getOneByUsername,
};
