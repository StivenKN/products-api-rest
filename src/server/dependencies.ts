import { ProductController } from '../products/infrastructure/controllers/product.controller';
import { ProductRepository } from '../products/infrastructure/product.repository';

const productRepository = new ProductRepository();
export const productController = new ProductController(productRepository);
