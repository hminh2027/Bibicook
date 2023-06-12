const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { TokenTypes } = require("../constants/token");
const { accountService } = require("../services");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) throw new Error();

    const decoded = jwt.verify(token, config.jwt.secret);
    if (decoded.type !== TokenTypes.ACCESS) throw new Error();

    const user = await accountService.getOneByUsername({
      username: decoded.username,
    });
    if (!user) throw new Error();
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    next({ ...error, message: "Token is invalid! Please login" });
  }
};

module.exports = auth;
