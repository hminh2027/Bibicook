const express = require("express");
const router = express.Router();

const docsRoute = require("./docs.route");
const accountRoute = require("./account.route");

router.use("/docs", docsRoute);
router.use("/account", accountRoute);
// router.use("/account", accountRoute);

module.exports = router;
