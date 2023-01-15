const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { TokenTypes } = require("../constants/token");

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

module.exports = {
  generateToken,
  generateRefreshToken,
  generateAccessToken,
};
