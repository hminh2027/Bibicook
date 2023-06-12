const httpStatus = require("http-status");
const ApiError = require("../utils/apiError");
const accountService = require("./account.service");
const passwordService = require("./password.service");

const login = async ({ username, password }) => {
  const user = await accountService.getOneByUsername({ username });

  if (
    !user ||
    !(await passwordService.comparePassword(password, user.password))
  )
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Sai tên đăng nhập hoặc mật khẩu"
    );

  return user;
};

const signup = async ({ password, username }) => {
  const hash = await passwordService.hashPassword(password);
  return accountService.createOne({ password: hash, username });
};

module.exports = {
  login,
  signup,
};
