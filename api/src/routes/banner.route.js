const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/banner.controller");
const upload = require("../middlewares/media-upload.middleware");
router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    bannerController.getBanners
  )
  .post(upload.array("banner"), bannerController.saveBanners);

module.exports = router;
