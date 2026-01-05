import { z } from 'zod';
import { insertStoreSchema, insertCategorySchema, stores, categories } from './schema';

export const api = {
  stores: {
    list: {
      method: 'GET' as const,
      path: '/api/stores',
      responses: {
        200: z.array(z.custom<typeof stores.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/stores',
      input: insertStoreSchema,
      responses: {
        201: z.custom<typeof stores.$inferSelect>(),
      },
    },
  },
  categories: {
    list: {
      method: 'GET' as const,
      path: '/api/categories',
      responses: {
        200: z.array(z.custom<typeof categories.$inferSelect>()),
      },
    },
  },
};
