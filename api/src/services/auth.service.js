const httpStatus = require("http-status");
const ApiError = require("../utils/apiError");
const accountService = require("./account.service");

const login = async ({ username, password }) => {
  const user = await accountService.getUserByUsernameAndPassword({
    username,
    password,
  });
  if (!user)
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Sai tên đăng nhập hoặc mật khẩu"
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
