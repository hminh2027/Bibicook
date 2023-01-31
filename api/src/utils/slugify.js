const _slugify = require("slugify");
const { slugifyConfig } = require("../config/slugify");

const slugifyMedia = (fName) => {
  // const originalName = Buffer.from(fName, "latin1").toString("utf8");
  const fnameSplitted = fName.split(".");
  const fileExtension = fnameSplitted.reduce((total, current, index) => {
    if (index != 0) return (total += "." + current);
    return "";
  }, "");

  const fileNameFormat = `${fnameSplitted[0]}-${Date.now()}.${fileExtension}`;

  return slugify(fileNameFormat);
};

const slugify = (string) => _slugify(string, slugifyConfig);

module.exports = {
  slugifyMedia,
  slugify,
};
