import { PrismaClient } from '@prisma/client';
import { type IProductRepository } from '../domain/IProductRepository.js';
import { Product } from '../domain/Product.js';

export class ProductRepository implements IProductRepository {
  private readonly _db: PrismaClient;

  constructor() {
    this._db = new PrismaClient();
  }

  public async get(): Promise<Product[] | null> {
    const products = await this._db.product.findMany();
    return products;
  }

  public async getId(id: string): Promise<Product | null> {
    const product = await this._db.product.findUnique({ where: { id } });

    if (!product) return null;

    return new Product(
      product.id,
      product.title,
      product.description,
      product.price,
    );
  }

  public async create(product: Product): Promise<Product> {
    const { id, title, description, price } = await this._db.product.create({
      data: product,
    });

    return new Product(id, title, description, price);
  }

  public async edit(id: string, product: Product): Promise<string> {
    await this._db.product.update({
      where: { id },
      data: product,
    });
    return id;
  }
}
