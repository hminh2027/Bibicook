import { Category } from './category.entity';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'modules/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), ProductModule],
  exports: [CategoryService],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
