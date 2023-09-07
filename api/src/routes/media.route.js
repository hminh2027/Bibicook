const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/media.controller");
const { auth } = require("../middlewares");

router.route("/").post(auth, mediaController.createMedia);

module.exports = router;
