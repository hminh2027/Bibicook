const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/media.controller");
const upload = require("../middlewares/media-upload.middleware");
router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    mediaController.getMedias
  )
  .post(upload.single("media"), mediaController.createMedia);

module.exports = router;
