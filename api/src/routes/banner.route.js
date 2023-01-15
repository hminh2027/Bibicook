const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/banner.controller");
const upload = require("../middlewares/banner-upload.middleware");
router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    bannerController.getBanners
  )
  .post(
    // auth("manageUsers"),
    // validate(userValidation.createUser),
    upload.array("banner"),
    bannerController.createBanner
  );

module.exports = router;
