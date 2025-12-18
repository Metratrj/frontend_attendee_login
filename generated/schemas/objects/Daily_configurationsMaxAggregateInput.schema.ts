import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  date: z.literal(true).optional(),
  late_cutoff_time: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const Daily_configurationsMaxAggregateInputObjectSchema: z.ZodType<Prisma.Daily_configurationsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Daily_configurationsMaxAggregateInputType>;
export const Daily_configurationsMaxAggregateInputObjectZodSchema = makeSchema();
