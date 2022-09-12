import { Module } from '@nestjs/common';
import { CommonModule } from './common';
import { DatabaseModule } from 'common/database/database.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { AuthModule } from 'modules/auth/auth.module';
import { ConfigModule } from 'common/config/config.module';
import { ConfigService } from 'common/config/config.service';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    AuthModule,
    CommonModule,
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {
  static port: string | number;
  static isDev: boolean;

  constructor(private readonly config: ConfigService) {
    AppModule.port = config.get('APP_PORT') ?? 3001;
    AppModule.isDev = config.get('APP_ENV') === 'development' ? true : false;
  }
}
