const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");

router
  .route("/")
  .get(
    // validate(userValidation.getUsers),
    categoryController.getCategories
  )
  .post(categoryController.createCategory);

router.route("/:slug").delete(categoryController.removeCategory);

module.exports = router;
