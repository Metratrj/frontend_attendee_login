import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const daily_configurationsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => daily_configurationsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => daily_configurationsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => daily_configurationsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => daily_configurationsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => daily_configurationsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  late_cutoff_time: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const daily_configurationsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.daily_configurationsScalarWhereWithAggregatesInput> = daily_configurationsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.daily_configurationsScalarWhereWithAggregatesInput>;
export const daily_configurationsScalarWhereWithAggregatesInputObjectZodSchema = daily_configurationsscalarwherewithaggregatesinputSchema;
