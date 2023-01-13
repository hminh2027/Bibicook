const express = require("express");
const router = express.Router();

const docsRoute = require("./docs.route");
const accountRoute = require("./account.route");
const authRoute = require("./auth.route");

router.use("/docs", docsRoute);
router.use("/account", accountRoute);
router.use("/auth", authRoute);

module.exports = router;
