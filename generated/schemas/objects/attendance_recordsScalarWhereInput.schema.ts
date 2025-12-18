import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { Enumattendance_statusFilterObjectSchema as Enumattendance_statusFilterObjectSchema } from './Enumattendance_statusFilter.schema';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const attendance_recordsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => attendance_recordsScalarWhereInputObjectSchema), z.lazy(() => attendance_recordsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => attendance_recordsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => attendance_recordsScalarWhereInputObjectSchema), z.lazy(() => attendance_recordsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  student_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  login_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => Enumattendance_statusFilterObjectSchema), attendance_statusSchema]).optional(),
  is_relogin: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  session_token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const attendance_recordsScalarWhereInputObjectSchema: z.ZodType<Prisma.attendance_recordsScalarWhereInput> = attendance_recordsscalarwhereinputSchema as unknown as z.ZodType<Prisma.attendance_recordsScalarWhereInput>;
export const attendance_recordsScalarWhereInputObjectZodSchema = attendance_recordsscalarwhereinputSchema;
