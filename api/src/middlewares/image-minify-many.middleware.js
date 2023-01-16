const fs = require("fs");
const sharp = require("sharp");
const restoreFileName = require("../utils/multer-file-name");
const IMAGE_QUALITY = 80;
const imageMinifyMany = async (req, res, next) => {
  fs.access("./public/upload/banner", (error) => {
    if (error) {
      fs.mkdirSync("./public/upload/banner");
    }
  });
  const {
    files,
    body: { index },
  } = req;
  const newFiles = await Promise.allSettled(
    files?.map(async (file, i) => {
      const { buffer, originalname, ...others } = file;
      const fileName = restoreFileName(originalname);
      const minifiedImage = await sharp(buffer)
        .webp({ quality: IMAGE_QUALITY })
        .toFile("./public/upload/banner/" + fileName);
      const url = `http://localhost:8000/upload/banner/${fileName}`;
      return {
        ...others,
        ...minifiedImage,
        fileName,
        url,
        index: parseInt(index[i]),
      };
    })
  );
  req.files = newFiles.map((file) => {
    return file.value;
  });
  next();
};
module.exports = imageMinifyMany;
