const Joi = require("joi");
const { password } = require("./custom.validation");

const login = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const signup = {
  body: Joi.object().keys({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required().custom(password),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  login,
  signup,
};
