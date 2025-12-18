import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const userscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => userScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  firstname: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.')]).optional(),
  lastname: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.')]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.')]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.email('Ungültiges eMail Format').max(255)]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional()
}).strict();
export const userScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.userScalarWhereWithAggregatesInput> = userscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.userScalarWhereWithAggregatesInput>;
export const userScalarWhereWithAggregatesInputObjectZodSchema = userscalarwherewithaggregatesinputSchema;
