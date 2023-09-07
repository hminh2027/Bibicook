const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/banner.controller");
const { auth } = require("../middlewares");

router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    bannerController.getBanners
  )
  .post(auth, bannerController.createBanners);

module.exports = router;
