import { t } from 'elysia';

export const productBodyDTO = {
  body: t.Object({
    id: t.String(),
    title: t.String(),
    description: t.String(),
    price: t.String(),
  }),
};

export const productParamsDTO = {
  params: t.Object({
    id: t.String(),
  }),
};
