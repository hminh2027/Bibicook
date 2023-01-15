const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/banner.controller");
const upload = require("../middleware/banner-upload.middleware");
const imageMinify = require("../middleware/image-minify.middleware");
router.route("/").get(
  // auth("getUsers"),
  // validate(userValidation.getUsers),
  bannerController.getBanners
);
router.route("upload").post(
  // auth("manageUsers"),
  // validate(userValidation.createUser),
  upload.single("banner"),
  imageMinify,
  bannerController.createBanner
);

module.exports = router;
