const express = require("express");
const router = express.Router();
const productController = require("../controllers/Product.controller");
const upload = require("../middlewares/upload.middleware");

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .patch(productController.updateProductById)
  .delete(productController.deleteProductById);

module.exports = router;
