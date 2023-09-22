const express = require("express");
const router = express.Router();
const productValidation = require("../validations/product.validation");
const productController = require("../controllers/product.controller");
const { validation } = require("../middlewares");
router
  .route("/")
  .get(productController.getMany)
  .post(productController.createOne);

router.route("/top-views").get(productController.getManyByTopViews);

router
  .route("/:id")
  .get(productController.getOneById)
  .patch(productController.updateOneById)
  .delete(productController.removeOneById);

module.exports = router;
