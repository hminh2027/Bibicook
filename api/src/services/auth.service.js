const httpStatus = require("http-status");
const ApiError = require("../utils/apiError");
const accountService = require("./account.service");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */

const login = async ({ username, password }) => {
  const user = await accountService.getUserByUsernameAndPassword({
    username,
    password,
  });
  if (!user)
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Username or password is incorrect"
    );

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
