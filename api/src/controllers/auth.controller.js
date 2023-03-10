const authService = require("../services/auth.service");
const tokenService = require("../services/token.service");
const httpStatus = require("http-status");
const { TokenTypes } = require("../constants/token");

const login = async (req, res, next) => {
  try {
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
        user,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res) => {
  return res
    .clearCookie("accessToken")
    .status(httpStatus.OK)
    .json({ message: "Đăng xuất thành công!" });
};

const refreshToken = (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  signup,
  logout,
  refreshToken,
};
