import { Elysia } from 'elysia';

export const productsRouter = new Elysia({ prefix: '/products' })
  .post('/', () => 'post')
  .get('/', () => 'get')
  .patch('/', () => 'patch');
