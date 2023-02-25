const express = require("express");
const router = express.Router();
const attributeController = require("../controllers/attribute.controller");
const { authenticate } = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    attributeController.getAttributes
  )
  .post(authenticate, attributeController.createAttribute);

router.route("/:name").delete(attributeController.deleteAttribute);
module.exports = router;
