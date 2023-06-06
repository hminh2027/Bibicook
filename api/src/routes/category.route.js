const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
const { auth } = require("../middlewares");
router
  .route("/")
  .get(
    // validate(userValidation.getUsers),
    categoryController.getCategories
  )
  .post(auth, categoryController.createCategory);

router.route("/:slug").delete(categoryController.removeCategory);

module.exports = router;
