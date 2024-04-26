import { PrismaClient } from '@prisma/client';
import { type IProduct } from '../domain/IProduct.js';
import { Product } from '../domain/Product.js';

export class ProductRepository implements IProduct {
  private readonly db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  public async get(): Promise<Product[] | null> {
    const products = await this.db.product.findMany();

    return products;
  }

  public async getId(id: string): Promise<Product | null> {
    const product = await this.db.product.findUnique({ where: { id } });
    return product;
  }

  public async create(product: Product): Promise<Product> {
    const { id, title, description, price } = await this.db.product.create({
      data: product,
    });

    return new Product(id, title, description, price);
  }

  public async edit(id: string, product: Product): Promise<string> {
    await this.db.product.update({
      where: { id },
      data: product,
    });
    return id;
  }
}
