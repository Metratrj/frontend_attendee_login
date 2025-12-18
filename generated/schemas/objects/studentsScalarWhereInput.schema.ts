import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UuidNullableFilterObjectSchema as UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema'

const studentsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => studentsScalarWhereInputObjectSchema), z.lazy(() => studentsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => studentsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => studentsScalarWhereInputObjectSchema), z.lazy(() => studentsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password_hash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  groupid: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const studentsScalarWhereInputObjectSchema: z.ZodType<Prisma.studentsScalarWhereInput> = studentsscalarwhereinputSchema as unknown as z.ZodType<Prisma.studentsScalarWhereInput>;
export const studentsScalarWhereInputObjectZodSchema = studentsscalarwhereinputSchema;
