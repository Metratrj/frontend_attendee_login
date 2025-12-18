import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { studentsCountOrderByAggregateInputObjectSchema as studentsCountOrderByAggregateInputObjectSchema } from './studentsCountOrderByAggregateInput.schema';
import { studentsMaxOrderByAggregateInputObjectSchema as studentsMaxOrderByAggregateInputObjectSchema } from './studentsMaxOrderByAggregateInput.schema';
import { studentsMinOrderByAggregateInputObjectSchema as studentsMinOrderByAggregateInputObjectSchema } from './studentsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: z.string().min(2, 'Username muss mindestens 2 Zeichen haben.').max(250).optional(),
  firstname: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben.').max(250).optional(),
  lastname: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben.').max(250).optional(),
  password_hash: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  groupid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => studentsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => studentsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => studentsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const studentsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.studentsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsOrderByWithAggregationInput>;
export const studentsOrderByWithAggregationInputObjectZodSchema = makeSchema();
