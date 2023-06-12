const httpStatus = require("http-status");
const { catchAsync } = require("../utils");
const { accountService } = require("../services");
const _ = require("lodash");

const getUserByToken = catchAsync(async (req, res) => {
  const user = req.user;
  res.status(httpStatus.OK).json({ user: _.omit(user, ["password"]) });
});

const updatePasswordByToken = catchAsync(async (req, res) => {
  const { password, username } = req.user;
  await accountService.updateOneById(user.id, {
    password,
    username,
  });
  res.status(httpStatus.OK).json({
    message: "Đổi mật khẩu thành công!",
  });
});

module.exports = {
  getUserByToken,
  updatePasswordByToken,
};
