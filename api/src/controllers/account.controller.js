const { catchAsync } = require("../utils");

const getUserByToken = catchAsync(async (req, res, next) => {
  const user = req.user;
  res.status(200).json(user);
});

const getUserById = catchAsync(async (req, res, next) => {});

const updateUserById = catchAsync(async (req, res, next) => {});

module.exports = {
  getUserById,
  getUserByToken,
};
