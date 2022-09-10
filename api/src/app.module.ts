import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth';
import { CommonModule } from './common';
import { ConfigModule, ConfigService } from './common/config';
import { DatabaseModule } from 'common/database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule, AuthModule, CommonModule],
})
export class AppModule {
  static port: string | number;
  static isDev: boolean;

  constructor(private readonly config: ConfigService) {
    AppModule.port = config.get('APP_PORT') ?? 3001;
    AppModule.isDev = config.get('APP_ENV') === 'development' ? true : false;
  }
}
