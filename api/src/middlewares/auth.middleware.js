const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { TokenTypes } = require("../constants/token");
const ApiError = require("../utils/api-error");
const accountService = require("../services/account.service");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.cookie;
    const decoded = jwt.verify(token, config.jwt.secret);
    if (decoded.type !== TokenTypes.ACCESS)
      throw new ApiError(httpStatus.BAD_REQUEST, "Token not accepted");
    const user = await accountService.getUserByEmail({ email: decoded.userId });
    if (!user) throw new ApiError(httpStatus.BAD_REQUEST, "Token from who?");
    req.user = user;
    console.log(decoded);
    console.log(user);

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authenticate };
