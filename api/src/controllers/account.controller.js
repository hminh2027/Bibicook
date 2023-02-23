const { request } = require("express");

const getUsers = async (req, res, next) => res.send("worked!");

const getUserByToken = async (req, res, next) => {
  const user = req.user;
  res.status(200).json(user);
};

const getUserById = async (req, res, next) => {};

const updateUserById = async (req, res, next) => {};

const deleteUserById = async (req, res, next) => {};

module.exports = {
  getUsers,
  getUserById,
  getUserByToken,
};
