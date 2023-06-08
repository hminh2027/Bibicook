const express = require("express");
const router = express.Router();
const productValidation = require("../validations/product.validation");
const productController = require("../controllers/product.controller");
const { auth, validation } = require("../middlewares");
router
  .route("/")
  .get(
    // auth,
    validation(productValidation.getProducts),
    productController.getProducts
  )
  .post(
    auth,
    validation(productValidation.createProduct),
    productController.createProduct
  );

router.route("/:id").get(productController.getProductById);
// .patch(productController.updateProductById)
// .delete(productController.deleteProductById);

module.exports = router;
