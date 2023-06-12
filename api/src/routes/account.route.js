const express = require("express");
const router = express.Router();

const userValidation = require("../validations/user.validation");

const { auth } = require("../middlewares");
const { accountController } = require("../controllers");

router
  .route("/me")
  .get(auth, accountController.getUserByToken)
  .put(auth, accountController.updatePasswordByToken);

module.exports = router;
