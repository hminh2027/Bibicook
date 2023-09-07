const express = require("express");
const router = express.Router();

const accountRoute = require("./account.route");
const authRoute = require("./auth.route");
const bannerRoute = require("./banner.route");
const productRoute = require("./product.route");
const mediaRoute = require("./media.route");

router.use("/account", accountRoute);
router.use("/auth", authRoute);
// router.use("/media", mediaRoute);
// router.use("/banner", bannerRoute);
// router.use("/product", productRoute);

module.exports = router;
