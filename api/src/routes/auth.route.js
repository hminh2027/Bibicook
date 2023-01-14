const express = require("express");
const httpStatus = require("http-status");
const router = express.Router();

// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const authController = require("../controllers/auth.controller");
const ApiError = require("../utils/apiError");

router
  .route("/login")
  .get(() => {
    throw new ApiError(httpStatus.NOT_FOUND, "Oh no");
    // throw new Error("yes its ,e");
  })
  .post(
    // validate(userValidation.createUser),
    authController.login
  );

router.route("/signup").post(
  // validate(userValidation.createUser),
  authController.signup
);

module.exports = router;
