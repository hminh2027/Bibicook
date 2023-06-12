const express = require("express");
const router = express.Router();
const authValidation = require("../validations/auth.validation");
const authController = require("../controllers/auth.controller");
const { validation } = require("../middlewares");

router
  .route("/login")
  .post(validation(authValidation.login), authController.login);

router
  .route("/signup")
  .post(validation(authValidation.signup), authController.signup);

router.route("/refresh").post(
  // validation(authValidation.refreshAuth)
  authController.refreshToken
);

router.route("/logout").get(authController.logout);

module.exports = router;
