const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/media.controller");
const upload = require("../middlewares/media-upload.middleware");
const { imageMinifyOne } = require("../middlewares/image-minify.middleware");
router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    mediaController.getMedias
  )
  .post(upload.single("media"), imageMinifyOne, mediaController.createMedia);

module.exports = router;
