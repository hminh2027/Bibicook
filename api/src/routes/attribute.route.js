const express = require("express");
const router = express.Router();
const attributeController = require("../controllers/attribute.controller");
const { auth } = require("../middlewares");

router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    attributeController.getAttributes
  )
  .post(auth, attributeController.createAttribute);

router.route("/:name").delete(attributeController.deleteAttribute);
module.exports = router;
