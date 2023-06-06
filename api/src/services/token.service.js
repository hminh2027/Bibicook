const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { TokenTypes } = require("../constants/token");
const ApiError = require("../utils/apiError");

const generateToken = ({ userId, type, expiresIn }) => {
  return jwt.sign({ userId, type }, config.jwt.secret, { expiresIn });
};

const generateRefreshToken = ({ userId }) => {
  return generateToken({
    userId,
    type: TokenTypes.REFRESH,
    expiresIn: config.jwt.rtExpiresIn,
  });
};

const generateAccessToken = ({ userId }) => {
  return generateToken({
    userId,
    type: TokenTypes.ACCESS,
    expiresIn: config.jwt.atExpiresIn,
  });
};

const verifyToken = ({ token, tokenType }) => {
  const decoded = jwt.verify(token, config.jwt.secret);

  if (decoded.type !== tokenType) {
    throw new ApiError(httpStatus.FORBIDDEN, "Token is invalid! Please login");
  }

  return decoded;
};

module.exports = {
  generateToken,
  generateRefreshToken,
  generateAccessToken,
  verifyToken,
};
