const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { slugify } = require("./slugify");
const config = require("../config/config");

const IMAGE_QUALITY = 80;
const UPLOAD_FOLDER = "upload";
const UPLOAD_PATH = path.join("public", UPLOAD_FOLDER);

const minifyFile = async (buffer) => {
  return await sharp(buffer)
    .webp({ quality: IMAGE_QUALITY })
    .toFile(`${UPLOAD_PATH}/${fileName}`);
};
// Need duplicateNumber only when filename already exist
const writeFile = async (buffer, originalName) => {
  const fileName = slugify(originalName);
  const url = `${config.url}/${UPLOAD_FOLDER}/${fileName}`;

  fs.access(`./${UPLOAD_PATH}/`, (error) => {
    if (error) {
      fs.mkdirSync(`./${UPLOAD_PATH}/`, { recursive: true });
    }
  });

  const minifiedImage = minifyFile(buffer);

  return { ...minifiedImage, fileName, url };
};
// TODO: hoàn thiện deleteFile và dùng trong catch(err)
const deleteFile = (fileName) => {
  fs.unlink(
    path.join(__dirname, fileName, (err) => {
      if (err) throw err;
      console.log("path/file.txt was deleted");
    })
  );
};

module.exports = { writeFile };
