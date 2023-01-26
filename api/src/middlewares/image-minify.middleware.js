const fs = require("fs");
const sharp = require("sharp");
const moment = require("moment");
const path = require("path");
const restoreFileName = require("../utils/multer-file-name");

const IMAGE_QUALITY = 80;
const curTime = moment(new Date(Date.now()));
const month = curTime.month();
const year = curTime.year();
const UPLOAD_PATH = path.join("public", `upload/${year}/${month}`);
const RETURN_UPLOAD_PATH = `upload/${year}/${month}`;

const imageMinifyMany = async (req, res, next) => {
  fs.access(`./${UPLOAD_PATH}/`, (error) => {
    if (error) {
      fs.mkdirSync(`./${UPLOAD_PATH}/`, { recursive: true });
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
        .toFile(`${UPLOAD_PATH}/` + fileName);
      const url = `http://localhost:8000/${RETURN_UPLOAD_PATH}/${fileName}`;
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

const imageMinifyOne = async (req, res, next) => {
  fs.access(`${UPLOAD_PATH}/`, (error) => {
    if (error) {
      fs.mkdirSync(`${UPLOAD_PATH}/`, { recursive: true });
    }
  });

  const { buffer, originalname, ...others } = req.file;
  const fileName = restoreFileName(originalname);
  const minifiedImage = await sharp(buffer)
    .webp({ quality: IMAGE_QUALITY })
    .toFile(`${UPLOAD_PATH}/` + fileName);
  const url = `http://localhost:8000/${RETURN_UPLOAD_PATH}/${fileName}`;
  req.file = { ...others, ...minifiedImage, fileName, url };
  next();
};
module.exports = { imageMinifyMany, imageMinifyOne };
