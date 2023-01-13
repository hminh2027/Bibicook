const { prisma } = require("../database/prismaClient");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async ({ email, password, username }) => {
  const user = await prisma.accounts.create({
    data: {
      email,
      password,
      username,
    },
  });

  return user;
};

module.exports = {
  createUser,
};
