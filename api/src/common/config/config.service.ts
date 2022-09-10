import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    const parsedConfig = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(parsedConfig);
  }

  private validateInput(parsedConfig: dotenv.DotenvParseOutput) {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      APP_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
      APP_PORT: Joi.number().default(3001),
      DB_TYPE: Joi.string().valid(
        'cockroachdb',
        'cordova',
        'mariadb',
        'mongodb',
        'mssql',
        'mysql',
        'nativescript',
        'oracle',
        'postgres',
        'react-native',
        'sqlite',
        'sqljs',
      ),
      DB_PORT: Joi.number().required(),
      DB_USERNAME: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
      DB_HOST: Joi.string().required(),
      DB_DATABASE: Joi.string().required(),
      DB_SYNC: Joi.bool().required(),

      // GOOGLE_CLIENT_ID: Joi.string().required(),
      // GOOGLE_SECRET: Joi.string().required(),
      // MAILER_EMAIL: Joi.string().email().required(),
      // MAILER_HOST: Joi.string().required().default('smtp.gmail.com'),
      // MAILER_PORT: Joi.number().required().default(465),
      // REDIS_URI: Joi.string().required().default('redis://127.0.0.1:6379'),
    });

    const validationOptions: Joi.ValidationOptions = { allowUnknown: true };

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      parsedConfig,
      validationOptions,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  isEnv(env: string) {
    return this.envConfig.APP_ENV === env;
  }
}
