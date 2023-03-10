const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/banner.controller");
const upload = require("../middlewares/upload.middleware");
const { authenticate } = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    bannerController.getBanners
  )
  .post(authenticate, bannerController.createBanners);

module.exports = router;
