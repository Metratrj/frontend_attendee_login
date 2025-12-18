import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const groupsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => groupsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => groupsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => groupsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => groupsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => groupsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255).min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.')]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  color: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(10).min(1, 'Bitte Farbe auswählen.')]).optional()
}).strict();
export const groupsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.groupsScalarWhereWithAggregatesInput> = groupsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.groupsScalarWhereWithAggregatesInput>;
export const groupsScalarWhereWithAggregatesInputObjectZodSchema = groupsscalarwherewithaggregatesinputSchema;
