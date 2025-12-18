import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { userCountOrderByAggregateInputObjectSchema as userCountOrderByAggregateInputObjectSchema } from './userCountOrderByAggregateInput.schema';
import { userMaxOrderByAggregateInputObjectSchema as userMaxOrderByAggregateInputObjectSchema } from './userMaxOrderByAggregateInput.schema';
import { userMinOrderByAggregateInputObjectSchema as userMinOrderByAggregateInputObjectSchema } from './userMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  firstname: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben.').max(250).optional(),
  lastname: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben.').max(250).optional(),
  username: z.string().min(2, 'Username muss mindestens 2 Zeichen haben.').max(250).optional(),
  email: z.email('Ungültiges eMail Format').optional(),
  password: SortOrderSchema.optional(),
  _count: z.lazy(() => userCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => userMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => userMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const userOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.userOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.userOrderByWithAggregationInput>;
export const userOrderByWithAggregationInputObjectZodSchema = makeSchema();
