import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { daily_configurationsCountOrderByAggregateInputObjectSchema as daily_configurationsCountOrderByAggregateInputObjectSchema } from './daily_configurationsCountOrderByAggregateInput.schema';
import { daily_configurationsMaxOrderByAggregateInputObjectSchema as daily_configurationsMaxOrderByAggregateInputObjectSchema } from './daily_configurationsMaxOrderByAggregateInput.schema';
import { daily_configurationsMinOrderByAggregateInputObjectSchema as daily_configurationsMinOrderByAggregateInputObjectSchema } from './daily_configurationsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  date: SortOrderSchema.optional(),
  late_cutoff_time: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => daily_configurationsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => daily_configurationsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => daily_configurationsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const daily_configurationsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.daily_configurationsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.daily_configurationsOrderByWithAggregationInput>;
export const daily_configurationsOrderByWithAggregationInputObjectZodSchema = makeSchema();
