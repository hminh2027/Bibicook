const createUser = async (req, res, next) => console.log("hi");

const getUsers = async (req, res, next) => res.send("worked!");

const getUser = async (req, res, next) => {};

const updateUser = async (req, res, next) => {};

const deleteUser = async (req, res, next) => {};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
