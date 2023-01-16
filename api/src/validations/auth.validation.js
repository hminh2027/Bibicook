const Joi = require("joi");

const login = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const signup = {
  body: Joi.object().keys({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  }),
};

module.exports = {
  login,
  signup,
};
