const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
const { authenticate } = require("../middlewares/auth.middleware");
router
  .route("/")
  .get(
    // validate(userValidation.getUsers),
    categoryController.getCategories
  )
  .post(authenticate, categoryController.createCategory);

router.route("/:slug").delete(categoryController.removeCategory);

module.exports = router;
