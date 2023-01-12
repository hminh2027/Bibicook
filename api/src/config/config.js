const Joi = require("joi");
const dotenv = require("dotenv");
dotenv.config();

const envVariables = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("development", "production", "test")
      .default("development"),
    PORT: Joi.number().default(8000),
    DATABASE_URL: Joi.string().required().description("MySQL url"),
  })
  .unknown();

const { value: envVars, error } = envVariables
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) throw new Error(error.message);

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  prisma: {
    url: envVars.DATABASE_URL,
  },
};
