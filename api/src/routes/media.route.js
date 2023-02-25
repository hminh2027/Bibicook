const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/media.controller");
const upload = require("../middlewares/upload.middleware");
const { authenticate } = require("../middlewares/auth.middleware");

router
  .route("/")
  .post(authenticate, upload.single("media"), mediaController.createMedia);

module.exports = router;
