const _slugify = require("slugify");

const slugifyConfig = {
  replacement: "-",
  remove: undefined,
  lower: false,
  strict: false,
  locale: "vi",
  trim: true,
};
const slugify = (string) => _slugify(string, slugifyConfig);
module.exports = slugify;
