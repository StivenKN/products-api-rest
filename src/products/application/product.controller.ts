import { type IProduct } from '../domain/IProduct.js';
import { Product } from '../domain/Product';

export class ProductController {
  constructor(private readonly productRepository: IProduct) {}

  public async getProducts() {
    return this.productRepository.get();
  }

  public async getProduct(id: string) {
    return this.productRepository.getId(id);
  }

  public async createProduct(product: Product) {
    return this.productRepository.create(product);
  }

  public async editProduct(id: string, product: Product) {
    return this.productRepository.edit(id, product);
  }
}
