import { Product } from 'modules/product/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  name!: string;

  /* N-1 */
  @OneToMany(() => Product, (prod) => prod.category)
  @JoinColumn({ name: 'categoryId' })
  products: Product;
}
