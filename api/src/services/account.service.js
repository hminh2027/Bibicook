const httpStatus = require("http-status");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");
const { exclude } = require("../utils/exclude");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async ({ email, password, username }) => {
  try {
    const user = await prisma.accounts.create({
      data: {
        email,
        password,
        username,
      },
    });
    return exclude(user, ["password"]);
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, "Oh no");
  }
};

const deleteUserById = async ({ id }) => {};

const updateUserById = async ({ id, email, password, username }) => {};

const getUsers = async () => {};

const getUserByEmail = async ({ email }) => {
  try {
    const user = await prisma.accounts.findUnique({
      where: { email },
    });
    return exclude(user, ["password"]);
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, "Oh no");
  }
};

const getUserByUsername = async ({ username }) => {
  try {
    const user = await prisma.accounts.findUnique({
      where: { username },
    });
    return exclude(user, ["password"]);
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
