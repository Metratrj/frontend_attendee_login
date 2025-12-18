import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  date: z.coerce.date().optional()
}).strict();
export const daily_configurationsWhereUniqueInputObjectSchema: z.ZodType<Prisma.daily_configurationsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.daily_configurationsWhereUniqueInput>;
export const daily_configurationsWhereUniqueInputObjectZodSchema = makeSchema();
