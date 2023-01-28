const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const slugifyFile = require("../utils/multer-file-name");
const IMAGE_QUALITY = 80;

// Need duplicateNumber only when filename already exist
const imageMinify = async (buffer, originalName) => {
  const UPLOAD_PATH = path.join("public", `upload`);
  fs.access(`./${UPLOAD_PATH}/`, (error) => {
    if (error) {
      fs.mkdirSync(`./${UPLOAD_PATH}/`, { recursive: true });
    }
  });
  const fileName = slugifyFile(originalName);
  console.log(fileName);
  const minifiedImage = await sharp(buffer)
    .webp({ quality: IMAGE_QUALITY })
    .toFile(`${UPLOAD_PATH}/` + fileName);
  const url = `http://localhost:8000/upload/${fileName}`;
  return { ...minifiedImage, fileName: fileName, url };
};
module.exports.imageMinify = imageMinify;
