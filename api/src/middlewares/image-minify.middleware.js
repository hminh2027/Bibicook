const fs = require("fs");
const sharp = require("sharp");
const restoreFileName = require("../utils/multer-file-name");
const IMAGE_QUALITY = 80;
const imageMinify = async (req, res, next) => {
  fs.access("./upload/banner", (error) => {
    if (error) {
      fs.mkdirSync("./upload/banner");
    }
  });
  const { buffer, originalname, ...others } = req.file;
  const fileName = restoreFileName(originalname);
  const minifiedImage = await sharp(buffer)
    .webp({ quality: IMAGE_QUALITY })
    .toFile("./upload/banner/" + fileName);
  const url = `http://localhost:3000/${fileName}`;
  req.file = { ...others, ...minifiedImage, fileName, url };
  next();
};
module.exports = imageMinify;
