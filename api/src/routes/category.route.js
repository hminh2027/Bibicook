const express = require("express");
const router = express.Router();
const { categoryController } = require("../controllers");
const { auth } = require("../middlewares");

router
  .route("/")
  .get(
    // validate(userValidation.getUsers),
    categoryController.getMany
  )
  .post(auth, categoryController.createOne);

router
  .route("/:id")
  .put(categoryController.updateOneById)
  .delete(categoryController.removeOneById);

module.exports = router;
