const express = require("express");
const router = express.Router();
const authValidation = require("../validations/auth.validation");
const authController = require("../controllers/auth.controller");
const { validate } = require("../middlewares/validate.middleware");

router
  .route("/login")
  .post(validate(authValidation.login), authController.login);

router
  .route("/signup")
  .post(validate(authValidation.signup), authController.signup);

module.exports = router;
