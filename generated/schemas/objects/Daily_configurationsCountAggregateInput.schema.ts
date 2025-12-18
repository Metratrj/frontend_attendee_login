import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  date: z.literal(true).optional(),
  late_cutoff_time: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Daily_configurationsCountAggregateInputObjectSchema: z.ZodType<Prisma.Daily_configurationsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Daily_configurationsCountAggregateInputType>;
export const Daily_configurationsCountAggregateInputObjectZodSchema = makeSchema();
