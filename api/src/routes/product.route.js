const express = require("express");
const router = express.Router();
const productValidation = require("../validations/product.validation");
const productController = require("../controllers/Product.controller");
const { validate } = require("../middlewares/validate.middleware");
const { authenticate } = require("../middlewares/auth.middleware");

router
  .route("/")
  .get(
    authenticate,
    validate(productValidation.getProducts),
    productController.getProducts
  )
  .post(
    authenticate,
    validate(productValidation.createProduct),
    productController.createProduct
  );

router.route("/:id").get(productController.getProductById);
// .patch(productController.updateProductById)
// .delete(productController.deleteProductById);

module.exports = router;
