import { Product } from './product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }

  findAll() {
    return this.productRepository.find();
  }

  findAllByCategorySlug(slug: string) {
    return 'heeloo';
    // return this.productRepository.find({ where: { sl}});
  }

  findOneBySlug(slug: string) {
    return this.productRepository.findOne({ where: { slug } });
  }

  async updateById(id: string, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id, updateProductDto);
  }

  async removeById(id: string) {
    return await this.productRepository.delete(id);
  }
}
