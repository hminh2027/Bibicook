const express = require("express");
const router = express.Router();

// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
const userValidation = require("../validations/user.validation");
const { auth } = require("../middlewares");
const { accountController } = require("../controllers");

router.route("/me").get(auth, accountController.getUserByToken);

module.exports = router;
