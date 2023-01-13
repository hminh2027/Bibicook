const express = require("express");
const router = express.Router();

// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const authController = require("../controllers/auth.controller");

router.route("/login").post(
  // validate(userValidation.createUser),
  authController.login
);

router.route("/signup").post(
  // validate(userValidation.createUser),
  authController.signup
);

module.exports = router;
