const Joi = require("joi");

const getProducts = {
  query: Joi.object().keys({
    page: Joi.number().integer().min(1).max(100).optional(),
    limit: Joi.number().integer().min(1).max(100).optional(),
  }),
};

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    shortDesc: Joi.string().required(),
    longDesc: Joi.string().required(),
    medias: Joi.array().required(),
    categorySlug: Joi.string().required(),
    attributes: Joi.array().optional(),
  }),
};

module.exports = {
  getProducts,
  createProduct,
};
