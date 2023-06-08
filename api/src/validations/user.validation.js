const Joi = require("joi");

const updateUser = {
  params: Joi.object().keys({
    // userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string(),
      name: Joi.string(),
    })
    .min(1),
};

module.exports = {
  updateUser,
};
