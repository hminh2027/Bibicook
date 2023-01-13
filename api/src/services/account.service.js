const { prisma } = require("../../prisma/prismaClient");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */

const login = async (email, password) => {
  const user = await prisma.accounts.findUniqueOrThrow({
    email,
    password,
  });
  // if (!user || !(await user.isPasswordMatch(password))) {
  //   // throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  // }
  console.log(user);

  return user;
};

const signup = async (email, password) => {};
