import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  date: z.boolean().optional(),
  late_cutoff_time: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const daily_configurationsSelectObjectSchema: z.ZodType<Prisma.daily_configurationsSelect> = makeSchema() as unknown as z.ZodType<Prisma.daily_configurationsSelect>;
export const daily_configurationsSelectObjectZodSchema = makeSchema();
