const Joi = require("joi");

const getProducts = {
  query: Joi.object().keys({
    page: Joi.number().integer().min(1).max(100).optional(),
    limit: Joi.number().integer().min(1).max(100).optional(),
  }),
};

module.exports = {
  getProducts,
};
