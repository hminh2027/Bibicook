import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'common/guards/jwt.guard';

@Controller('product')
@ApiTags('product')
// @ApiBearerAuth()
@UsePipes(ValidationPipe)
// @UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({
    description: 'create new product',
  })
  async create(@Body() createProductDto: CreateProductDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'New product created successfully',
      data: await this.productService.create(createProductDto),
    };
  }

  @Get()
  @ApiOperation({
    description: 'get all product',
  })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':slug')
  @ApiOperation({
    description: 'get a product by slug',
  })
  findOne(@Param('slug') slug: string) {
    return this.productService.findOneBySlug(slug);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'update a product',
  })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Product updated successfully',
      data: await this.productService.updateById(id, updateProductDto),
    };
  }

  @Delete(':id')
  @ApiOperation({
    description: 'delete a product',
  })
  async remove(@Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Product deleted successfully',
      data: await this.productService.removeById(id),
    };
  }
}
