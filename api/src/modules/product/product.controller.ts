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
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'common/guards';

@Controller('product')
@ApiTags('product')
@ApiBearerAuth()
@UsePipes(ValidationPipe)
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({
    description: 'create new product',
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({
    description: 'create comment',
  })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':slug')
  @ApiOperation({
    description: 'get product by slug',
  })
  findOne(@Param('slug') slug: string) {
    return this.productService.findOneBySlug(slug);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'update a product',
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({
    description: 'delete product',
  })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
