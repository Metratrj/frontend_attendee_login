import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const daily_configurationswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => daily_configurationsWhereInputObjectSchema), z.lazy(() => daily_configurationsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => daily_configurationsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => daily_configurationsWhereInputObjectSchema), z.lazy(() => daily_configurationsWhereInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  late_cutoff_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const daily_configurationsWhereInputObjectSchema: z.ZodType<Prisma.daily_configurationsWhereInput> = daily_configurationswhereinputSchema as unknown as z.ZodType<Prisma.daily_configurationsWhereInput>;
export const daily_configurationsWhereInputObjectZodSchema = daily_configurationswhereinputSchema;
