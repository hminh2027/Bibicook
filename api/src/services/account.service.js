const httpStatus = require("http-status");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/apiError");
const _ = require("lodash");

const createUser = async ({ email, password, username }) => {
  const emailNotUniue = await getUserByEmail({ email });
  const usernameNotUniue = await getUserByUsername({ username });
  if (emailNotUniue)
    throw new ApiError(httpStatus.BAD_REQUEST, "Email này đã tồn tại");
  if (usernameNotUniue)
    throw new ApiError(httpStatus.BAD_REQUEST, "Username này đã tồn tại");

  const user = await prisma.accounts.create({
    data: {
      email,
      password,
      username,
    },
  });
  return _.omit(user, ["password"]);
};

const updateUserById = async ({ id, email, password, username }) => {};

const getUserByUsernameAndPassword = async ({ username, password }) => {
  try {
    const user = await prisma.accounts.findFirstOrThrow({
      where: { username, password, isActive: true },
    });
    return _.omit(user, ["password"]);
  } catch (error) {}
};

module.exports = {
  createUser,
  updateUserById,
  getUserByUsernameAndPassword,
};
