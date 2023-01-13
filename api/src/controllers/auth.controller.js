const { prisma } = require("../database/prismaClient");
const authService = require("../services/auth.service");

const httpStatus = require("http-status");

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  // const user = await
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
