const express = require("express");
const router = express.Router();

const docsRoute = require("./docs.route");
const accountRoute = require("./account.route");
const authRoute = require("./auth.route");
const bannerRoute = require("./banner.route");
const productRoute = require("./product.route");
const mediaRoute = require("./media.route");
const categoryRoute = require("./category.route");
const attributeRoute = require("./attribute.route");

router.use("/docs", docsRoute);
router.use("/account", accountRoute);
router.use("/auth", authRoute);
router.use("/media", mediaRoute);
router.use("/banner", bannerRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/attribute", attributeRoute);

module.exports = router;
