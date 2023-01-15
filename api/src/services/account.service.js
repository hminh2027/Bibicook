const { METHOD_NOT_ALLOWED } = require("http-status");
const httpStatus = require("http-status");
const { PrismaErrors } = require("../constants/error");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");
const { exclude } = require("../utils/exclude");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
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
  return exclude(user, ["password"]);
};

const deleteUserById = async ({ id }) => {};

const updateUserById = async ({ id, email, password, username }) => {};

const getUsers = async () => {};

const getUserByEmail = async ({ email }) => {
  try {
    const user = await prisma.accounts.findUnique({
      where: { email },
    });
    return user ? exclude(user, ["password"]) : user;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, error);
  }
};

const getUserByUsername = async ({ username }) => {
  try {
    const user = await prisma.accounts.findUnique({
      where: { username },
    });
    return user ? exclude(user, ["password"]) : user;
  } catch (error) {}
};

const getUserByUsernameAndPassword = async ({ username, password }) => {
  try {
    const user = await prisma.accounts.findFirst({
      where: { username, password },
    });
    return exclude(user, ["password"]);
  } catch (error) {}
};

module.exports = {
  createUser,
  deleteUserById,
  getUserByEmail,
  updateUserById,
  getUsers,
  getUserByUsername,
  getUserByUsernameAndPassword,
};
