const express = require("express");
const router = express.Router();
const productValidation = require("../validations/product.validation");

const productController = require("../controllers/Product.controller");
const { validate } = require("../middlewares/validate.middleware");

router
  .route("/")
  .get(
    // validate(productValidation.getProducts),
    productController.getProducts
  )
  .post(productController.createProduct);

router.route("/:id").get(productController.getProductById);
// .patch(productController.updateProductById)
// .delete(productController.deleteProductById);

module.exports = router;
