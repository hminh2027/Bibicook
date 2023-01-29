const multer = require("multer");
const path = require("path");

const FILE_SIZE_LIMIT = 40 * 1024 * 1024; // size = ?
const FILE_TYPES_REGEX = /jpeg|jpg|png|gif|webp|svg/;

const checkFileType = (file, cb) => {
  // Check ext
  const validExt = FILE_TYPES_REGEX.test(
    path.extname(file.originalname).toLowerCase()
  );
  // Check mime
  const validMime = FILE_TYPES_REGEX.test(file.mimetype);

  if (validExt && validMime) {
    return cb(null, true);
  } else {
    console.log(path.extname(file.originalname).toLowerCase());
    cb("Error: Images Only!");
  }
};

module.exports.multerConfig = {
  storage: multer.memoryStorage(),
  limits: { fileSize: FILE_SIZE_LIMIT },
  fileFilter: function (_req, file, cb) {
    checkFileType(file, cb);
  },
  preservePath: true,
};
