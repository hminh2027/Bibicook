const { prisma } = require("../database/prismaClient");
const accountService = require("./account.service");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */

const login = async (email, password) => {
  console.log(user);

  return user;
};

const signup = async ({ email, password, username }) => {
  const user = await accountService.createUser({ email, password, username });
  return user;
};

module.exports = {
  login,
  signup,
};
