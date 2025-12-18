import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { Enumattendance_statusFilterObjectSchema as Enumattendance_statusFilterObjectSchema } from './Enumattendance_statusFilter.schema';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StudentsScalarRelationFilterObjectSchema as StudentsScalarRelationFilterObjectSchema } from './StudentsScalarRelationFilter.schema';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './studentsWhereInput.schema'

const attendance_recordswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => attendance_recordsWhereInputObjectSchema), z.lazy(() => attendance_recordsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => attendance_recordsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => attendance_recordsWhereInputObjectSchema), z.lazy(() => attendance_recordsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  student_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  login_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => Enumattendance_statusFilterObjectSchema), attendance_statusSchema]).optional(),
  is_relogin: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  session_token: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  students: z.union([z.lazy(() => StudentsScalarRelationFilterObjectSchema), z.lazy(() => studentsWhereInputObjectSchema)]).optional()
}).strict();
export const attendance_recordsWhereInputObjectSchema: z.ZodType<Prisma.attendance_recordsWhereInput> = attendance_recordswhereinputSchema as unknown as z.ZodType<Prisma.attendance_recordsWhereInput>;
export const attendance_recordsWhereInputObjectZodSchema = attendance_recordswhereinputSchema;
