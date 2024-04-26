import { Elysia } from 'elysia';
import { ProductRepository } from '../infrastructure/product.repository.js';
import { productBodyDTO, productParamsDTO } from '../domain/ProductDTO.js';
import { IProduct } from '../domain/IProduct.js';

const productRepository: IProduct = new ProductRepository();

export const productsController = new Elysia({ prefix: '/products' })
  .get('/', async () => await productRepository.get())
  .get(
    '/:id',
    async ({ params: { id } }) => await productRepository.getId(id),
    productParamsDTO,
  )
  .post(
    '/',
    async ({ body }) => await productRepository.create(body),
    productBodyDTO,
  )
  .patch(
    '/:id',
    async ({ params: { id }, body }) => await productRepository.edit(id, body),
    { ...productBodyDTO, ...productParamsDTO },
  );
