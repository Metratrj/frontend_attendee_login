import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UuidNullableFilterObjectSchema as UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { Attendance_recordsListRelationFilterObjectSchema as Attendance_recordsListRelationFilterObjectSchema } from './Attendance_recordsListRelationFilter.schema';
import { GroupsNullableScalarRelationFilterObjectSchema as GroupsNullableScalarRelationFilterObjectSchema } from './GroupsNullableScalarRelationFilter.schema';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './groupsWhereInput.schema'

const studentswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => studentsWhereInputObjectSchema), z.lazy(() => studentsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => studentsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => studentsWhereInputObjectSchema), z.lazy(() => studentsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.')]).optional(),
  firstname: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.')]).optional(),
  lastname: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.')]).optional(),
  password_hash: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  groupid: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable(),
  attendance_records: z.lazy(() => Attendance_recordsListRelationFilterObjectSchema).optional(),
  group: z.union([z.lazy(() => GroupsNullableScalarRelationFilterObjectSchema), z.lazy(() => groupsWhereInputObjectSchema)]).optional()
}).strict();
export const studentsWhereInputObjectSchema: z.ZodType<Prisma.studentsWhereInput> = studentswhereinputSchema as unknown as z.ZodType<Prisma.studentsWhereInput>;
export const studentsWhereInputObjectZodSchema = studentswhereinputSchema;
