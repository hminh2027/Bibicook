const slugify = require("./slugify");
const restoreFileName = (fName) => {
  const originalName = Buffer.from(fName, "latin1").toString("utf8");
  const fnameSplitted = originalName.split(".");
  const fileName = slugify(fnameSplitted[0]);
  const fileExtension = fnameSplitted.reduce((total, current, index) => {
    if (index != 0) return (total += "." + current);
    return "";
  }, "");

  return fileName + fileExtension;
};

module.exports = restoreFileName;
