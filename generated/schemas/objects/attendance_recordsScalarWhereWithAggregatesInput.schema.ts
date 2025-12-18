import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { Enumattendance_statusWithAggregatesFilterObjectSchema as Enumattendance_statusWithAggregatesFilterObjectSchema } from './Enumattendance_statusWithAggregatesFilter.schema';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const attendance_recordsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => attendance_recordsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => attendance_recordsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => attendance_recordsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => attendance_recordsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => attendance_recordsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  student_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  login_time: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => Enumattendance_statusWithAggregatesFilterObjectSchema), attendance_statusSchema]).optional(),
  is_relogin: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  session_token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const attendance_recordsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.attendance_recordsScalarWhereWithAggregatesInput> = attendance_recordsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.attendance_recordsScalarWhereWithAggregatesInput>;
export const attendance_recordsScalarWhereWithAggregatesInputObjectZodSchema = attendance_recordsscalarwherewithaggregatesinputSchema;
