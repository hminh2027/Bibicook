import { Product } from './../product/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  name!: string;

  @Column({ length: 255 })
  slug!: string;

  /* 1-N */
  @OneToMany(() => Product, (product) => product.category, { cascade: true })
  products: Product;
}
