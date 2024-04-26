import { Product } from './Product.js';

export interface IProduct {
  get(): Promise<Product[] | null>;
  getId(id: string): Promise<Product | null>;
  create(product: Product): Promise<Product>;
  edit(id: string, product: Product): Promise<string>;
}
