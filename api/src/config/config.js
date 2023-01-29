const Joi = require("joi");
const dotenv = require("dotenv");
dotenv.config();

const envVariables = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("development", "production", "test")
      .default("development"),
    APP_PORT: Joi.number().default(8000),
    APP_URL: Joi.string().required().description("App url"),
    DATABASE_URL: Joi.string().required().description("MySQL url"),
    JWT_SECRET: Joi.string().required().description("JWT secret"),
    JWT_AT_EXPIRE_IN: Joi.string()
      .required()
      .description("JWT access token time-to-live"),
    JWT_RT_EXPIRE_IN: Joi.string()
      .required()
      .description("JWT refresh token time-to-live"),
    JWT_VERIFY_EMAIL_EXPIRE_IN: Joi.string()
      .required()
      .description("JWT verify email token time-to-live"),
  })
  .unknown();

const { value: envVars, error } = envVariables
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) throw new Error(error.message);

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.APP_PORT,
  url: envVars.APP_URL,
  prisma: {
    url: envVars.DATABASE_URL,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    atExpiresIn: envVars.JWT_AT_EXPIRE_IN,
    rtExpiresIn: envVars.JWT_RT_EXPIRE_IN,
    emailExpiresIn: envVars.JWT_VERIFY_EMAIL_EXPIRE_IN,
  },
};
