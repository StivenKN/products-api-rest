import { Elysia } from 'elysia';
import { productBodyDTO, productParamsDTO } from '../domain/ProductDTO.js';
import { productController } from '../../server/dependencies.js';

export const productsRouter = new Elysia({ prefix: '/products' })
  .get('/', async () => {
    return await productController.getProducts();
  })
  .get(
    '/:id',
    async ({ params: { id } }) => {
      const product = await productController.getProduct(id);
      return { product };
    },
    productParamsDTO,
  )
  .post(
    '/',
    async ({ body, set }) => {
      set.status = 'Created';
      const product = await productController.createProduct(body);
      return { product };
    },
    productBodyDTO,
  )
  .patch(
    '/:id',
    async ({ params: { id }, body }) => {
      return await productController.editProduct(id, body);
    },
    { ...productBodyDTO, ...productParamsDTO },
  );
