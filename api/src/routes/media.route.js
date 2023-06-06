const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/media.controller");
const upload = require("../middlewares/upload.middleware");
const { auth } = require("../middlewares");

router
  .route("/")
  .post(auth, upload.single("media"), mediaController.createMedia);

module.exports = router;
