const path = require("path");

const folders = __dirname.split(path.sep);
const packageName = folders[folders.length - 1];

module.exports = {
  POST_MAX_SIZE: 40, //MB
  UPLOAD_MAX_FILE_SIZE: 40, //MB
  PROJECT_DIR: packageName,
};
