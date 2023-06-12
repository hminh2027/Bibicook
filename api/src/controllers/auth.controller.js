const authService = require("../services/auth.service");
const tokenService = require("../services/token.service");
const httpStatus = require("http-status");
const { TokenTypes } = require("../constants/token");
const { catchAsync } = require("../utils");
const _ = require("lodash");

const login = catchAsync(async (req, res) => {
  const { username, password } = req.body;
  const user = await authService.login({ username, password });
  const accessToken = await tokenService.generateAccessToken({
    userId: user.email,
  });
  const refreshToken = await tokenService.generateRefreshToken({
    userId: user.email,
  });

  res
    .cookie("accessToken", accessToken, {
      httpOnly: true,
    })
    .json({
      user: _.omit(user, ["password"]),
      accessToken,
      refreshToken,
    });
});

const signup = catchAsync(async (req, res) => {
  const { email, password, username } = req.body;

  const user = await authService.signup({ email, password, username });

  res.status(httpStatus.CREATED).json({
    user,
    accessToken: await tokenService.generateAccessToken({
      userId: user.email,
    }),
    refreshToken: await tokenService.generateRefreshToken({
      userId: user.email,
    }),
  });
});

const logout = catchAsync(async (req, res) => {
  return res
    .clearCookie("accessToken")
    .status(httpStatus.OK)
    .json({ message: "Đăng xuất thành công!" });
});

const refreshToken = catchAsync((req, res) => {
  const { refreshToken } = req.body;

  const decoded = tokenService.verifyToken({
    token: refreshToken,
    tokenType: TokenTypes.REFRESH,
  });

  const accessToken = tokenService.generateAccessToken({
    userId: decoded.userId,
  });

  res
    .cookie("accessToken", accessToken, {
      httpOnly: true,
    })
    .json({ accessToken });
});

module.exports = {
  login,
  signup,
  logout,
  refreshToken,
};
