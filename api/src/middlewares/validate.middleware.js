const httpStatus = require("http-status");
const Joi = require("joi");
const _ = require("lodash");
const ApiError = require("../utils/api-error");

const validate = (schema) => (req, res, next) => {
  const validSchema = _.pick(schema, ["body", "query", "params"]);
  const object = _.pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" } })
    .validate(object);
  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }
  Object.assign(req, value);
  return next();
};

module.exports = {
  validate,
};
