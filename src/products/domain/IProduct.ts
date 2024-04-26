import { Product } from './Product.js';

export interface IProduct {
  get(): Promise<Product[]>;
  getId(id: string): Promise<Product>;
  create(product: Product): Promise<Product>;
  edit(id: string, product: Product): Promise<void>;
}
