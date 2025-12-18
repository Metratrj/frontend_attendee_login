import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => userWhereInputObjectSchema), z.lazy(() => userWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => userWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => userWhereInputObjectSchema), z.lazy(() => userWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  firstname: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.')]).optional(),
  lastname: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.')]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.')]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.email('Ungültiges eMail Format').max(255)]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional()
}).strict();
export const userWhereInputObjectSchema: z.ZodType<Prisma.userWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.userWhereInput>;
export const userWhereInputObjectZodSchema = userwhereinputSchema;
