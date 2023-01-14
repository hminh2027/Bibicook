const httpStatus = require("http-status");
const { PrismaErrors } = require("../constants/error");
const { prisma } = require("../database/prismaClient");
const ApiError = require("../utils/apiError");
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

module.exports = {
  createUser,
};
