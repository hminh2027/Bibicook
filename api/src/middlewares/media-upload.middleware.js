const FILE_SIZE_LIMIT = 40 * 1024 * 1024;

const path = require("path");
const multer = require("multer");

const storage = multer.memoryStorage();
const checkFileType = (file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|webp|svg/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    console.log(path.extname(file.originalname).toLowerCase());
    cb("Error: Images Only!");
  }
};
const upload = multer({
  storage: storage,
  limits: { fileSize: FILE_SIZE_LIMIT },
  fileFilter: function (_req, file, cb) {
    checkFileType(file, cb);
  },
  preservePath: true,
});

module.exports = upload;
