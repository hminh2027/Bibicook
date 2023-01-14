const { prisma } = require("../database/prismaClient");
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
    console.log(error);
  }
};

module.exports = {
  createUser,
};
