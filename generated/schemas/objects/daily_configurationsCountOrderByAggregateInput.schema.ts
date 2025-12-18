import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  date: SortOrderSchema.optional(),
  late_cutoff_time: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const daily_configurationsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.daily_configurationsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.daily_configurationsCountOrderByAggregateInput>;
export const daily_configurationsCountOrderByAggregateInputObjectZodSchema = makeSchema();
