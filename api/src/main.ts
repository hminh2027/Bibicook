import { NestFactory } from '@nestjs/core';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './common/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = '/api';

  // CORS
  app.enableCors();

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      stopAtFirstError: true,
      exceptionFactory: (validationError: ValidationError[]) => {
        const errors = {};
        validationError.map(
          (err) => (errors[err.property] = Object.values(err.constraints)[0]),
        );
        return new BadRequestException(errors);
      },
    }),
  );

  // Global Prefix
  app.setGlobalPrefix(globalPrefix);

  // Swagger Api
  setupSwagger(app);

  await app.listen(process.env.APP_PORT || 3001);

  // Hot Module Reload
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  // Log url
  let baseUrl = app.getHttpServer().address().address;
  if (baseUrl === '0.0.0.0' || baseUrl === '::') {
    baseUrl = 'localhost';
  }
  const url = `http://${baseUrl}:${AppModule.port}${globalPrefix}`;
  console.log(`Listening to ${url}`);
  if (AppModule.isDev) {
    console.log(`API Documentation available at ${url}/docs`);
  }
}
bootstrap();
