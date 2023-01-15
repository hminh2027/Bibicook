const authService = require("../services/auth.service");
const tokenService = require("../services/token.service");

const httpStatus = require("http-status");

const login = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(tokenService.generateAccessToken({ userId: 123 }));

  // authService
  //   .login({ username, password })
  //   .then((user) => res.json(user))
  //   .catch((error) => next(error));
};

const signup = async (req, res) => {
  const { email, password, username } = req.body;
  console.log(email, password, username);

  const user = await authService.signup({ email, password, username });

  res.status(httpStatus.CREATED).json({ user });
};

module.exports = {
  login,
  signup,
};
