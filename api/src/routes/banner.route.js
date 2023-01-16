const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/banner.controller");
const upload = require("../middlewares/banner-upload.middleware");
const imageMinify = require("../middlewares/image-minify.middleware");
const imageMinifyMany = require("../middlewares/image-minify-many.middleware");
router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    bannerController.getBanners
  )
  .post(
    upload.array("banner"),
    imageMinifyMany,
    bannerController.createBanners
  );

module.exports = router;
