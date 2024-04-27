import { t } from 'elysia';

export const productBodyDTO = {
  body: t.Object({
    title: t.String({ minLength: 1 }),
    description: t.String({ minLength: 1 }),
    price: t.String({ minLength: 1 }),
  }),
};

export const productParamsDTO = {
  params: t.Object({
    id: t.String({ minLength: 1 }),
  }),
};
