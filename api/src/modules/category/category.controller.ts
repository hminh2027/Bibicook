import { ProductService } from './../product/product.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('category')
// @ApiBearerAuth()
@UsePipes(ValidationPipe)
// @UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
  ) {}

  @Post()
  @ApiOperation({
    description: 'create new category',
  })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'New category created successfully',
      data: await this.categoryService.create(createCategoryDto),
    };
  }

  @Get()
  @ApiOperation({
    description: 'get all category',
  })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':slug')
  @ApiOperation({
    description: 'get all product by category slug',
  })
  findAllProductByCategorySlug(@Param('slug') slug: string) {
    return this.productService.findAllByCategorySlug(slug);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'update a category by id',
  })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Category updated successfully',
      data: await this.categoryService.updateById(id, updateCategoryDto),
    };
  }

  @Delete(':id')
  @ApiOperation({
    description: 'remove a category by id',
  })
  async remove(@Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Category deleted successfully',
      data: await this.categoryService.removeById(id),
    };
  }
}
