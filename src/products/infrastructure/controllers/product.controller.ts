import { IProductRepository } from '../../domain/IProductRepository.js';
import { Product } from '../../domain/Product.js';

export class ProductController {
  constructor(private readonly _productRepository: IProductRepository) {}

  async getProducts(): Promise<Product[] | null> {
    return this._productRepository.get();
  }

  async getProduct(id: string): Promise<Product | null> {
    return this._productRepository.getId(id);
  }

  async createProduct(product: Product): Promise<Product | null> {
    return this._productRepository.create(product);
  }

  async editProduct(id: string, product: Product): Promise<string | null> {
    return this._productRepository.edit(id, product);
  }
}
