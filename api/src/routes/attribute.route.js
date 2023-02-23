const express = require("express");
const router = express.Router();
const attributeController = require("../controllers/attribute.controller");
router
  .route("/")
  .get(
    // auth("getUsers"),
    // validate(userValidation.getUsers),
    attributeController.getAttributes
  )
  .post(attributeController.createAttribute);

router.route("/:name").delete(attributeController.deleteAttribute);
module.exports = router;
