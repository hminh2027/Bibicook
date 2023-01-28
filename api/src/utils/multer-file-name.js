const slugify = require("./slugify");
const slugifyFile = (fName) => {
  const originalName = Buffer.from(fName, "latin1").toString("utf8");
  const fnameSplitted = originalName.split(".");
  const fileName = slugify(fnameSplitted[0] + "-" + Date.now());
  const fileExtension = fnameSplitted.reduce((total, current, index) => {
    if (index != 0) return (total += "." + current);
    return "";
  }, "");

  return slugify(fileName + fileExtension);
};

module.exports = slugifyFile;
