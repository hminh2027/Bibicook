const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const config = require("../config/config");
const { slugifyMedia } = require("./slugify");

const IMAGE_QUALITY = 80;
const UPLOAD_FOLDER = "upload";
const UPLOAD_PATH = path.join("public", UPLOAD_FOLDER);

// TODO: Check size xem có cần sharp hay không
const minifyFile = (buffer, fileName) => {
  return sharp(buffer)
    .webp({ quality: IMAGE_QUALITY })
    .toFile(`${UPLOAD_PATH}/${fileName}`);
};

// Need duplicateNumber only when filename already exist
const writeFile = (buffer, originalName) => {
  const fileName = slugifyMedia(originalName);
  const url = `${config.url}/${UPLOAD_FOLDER}/${fileName}`;

  fs.access(`./${UPLOAD_PATH}/`, (error) => {
    if (error) {
      fs.mkdirSync(`./${UPLOAD_PATH}/`, { recursive: true });
    }
  });

  const minifiedImage = minifyFile(buffer, fileName);

  return { ...minifiedImage, fileName, url };
};

const deleteFile = (fileName) => {
  fs.unlink(`${UPLOAD_PATH}/${fileName}`, (err) => {
    if (err) console.log(err);
    console.log("path/file.txt was deleted");
  });
  console.log("deleted");
};

module.exports = { writeFile, deleteFile };
