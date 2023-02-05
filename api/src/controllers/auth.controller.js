const authService = require("../services/auth.service");
const tokenService = require("../services/token.service");

const httpStatus = require("http-status");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await authService.login({ username, password });
    res.json({
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

module.exports = {
  login,
  signup,
};
