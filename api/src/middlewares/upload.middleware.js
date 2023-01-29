const { multerConfig } = require("../config/multer");
const multer = require("multer");

const upload = multer(multerConfig);

module.exports = upload;
