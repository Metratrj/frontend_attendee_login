import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { UuidNullableWithAggregatesFilterObjectSchema as UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema'

const studentsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => studentsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => studentsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => studentsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => studentsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => studentsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.')]).optional(),
  firstname: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.')]).optional(),
  lastname: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.')]).optional(),
  password_hash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  groupid: z.union([z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const studentsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.studentsScalarWhereWithAggregatesInput> = studentsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.studentsScalarWhereWithAggregatesInput>;
export const studentsScalarWhereWithAggregatesInputObjectZodSchema = studentsscalarwherewithaggregatesinputSchema;
