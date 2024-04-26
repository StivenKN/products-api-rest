import { env } from 'bun';
import { Elysia } from 'elysia';
import { productsController } from '../products/application/products.controller';
import swagger from '@elysiajs/swagger';

export class Server {
  private app: Elysia<'/api'>;

  constructor() {
    this.app = new Elysia({ prefix: '/api' });
    this.app.use(swagger());
    this.app.group('/v1', (app) => {
      return app.use(productsController);
    });
  }

  public init(): void {
    this.app.listen(env.PORT ?? '3000', ({ port }) => {
      console.log(`Server running on PORT ${port}`);
    });
  }
}
