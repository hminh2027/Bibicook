const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message("Mật khẩu phải có độ dài từ 6 - 15 kí tự");
  }

  return value;
};

module.exports = {
  password,
};
