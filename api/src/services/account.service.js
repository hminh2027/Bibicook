const httpStatus = require("http-status");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/apiError");
const _ = require("lodash");

const createUser = async ({ password, username }) => {
  const usernameNotUniue = await getOneByUsername({ username });
  if (usernameNotUniue)
    throw new ApiError(httpStatus.BAD_REQUEST, "Username này đã tồn tại");

  const user = await prisma.account.create({
    data: {
      password,
      username,
    },
  });
  return _.omit(user, ["password"]);
};

const getOneByUsername = async ({ username }) => {
  return prisma.account.findFirst({
    where: { username },
  });
};

const getOneByUsernameAndPassword = async ({ username, password }) => {
  const user = await prisma.account.findFirst({
    where: { username, password },
  });
  return _.omit(user, ["password"]);
};

const updateUserById = async ({ id, password, username }) => {};

module.exports = {
  createUser,
  updateUserById,
  getOneByUsername,
  getOneByUsernameAndPassword,
};
