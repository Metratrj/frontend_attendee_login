import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  date: z.coerce.date(),
  late_cutoff_time: z.coerce.date(),
  created_at: z.coerce.date().optional()
}).strict();
export const daily_configurationsCreateInputObjectSchema: z.ZodType<Prisma.daily_configurationsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.daily_configurationsCreateInput>;
export const daily_configurationsCreateInputObjectZodSchema = makeSchema();
