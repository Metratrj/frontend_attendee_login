import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { studentsCreateNestedOneWithoutAttendance_recordsInputObjectSchema as studentsCreateNestedOneWithoutAttendance_recordsInputObjectSchema } from './studentsCreateNestedOneWithoutAttendance_recordsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  login_time: z.coerce.date().optional(),
  status: attendance_statusSchema,
  is_relogin: z.boolean().optional(),
  session_token: z.string().max(255),
  created_at: z.coerce.date().optional(),
  students: z.lazy(() => studentsCreateNestedOneWithoutAttendance_recordsInputObjectSchema)
}).strict();
export const attendance_recordsCreateInputObjectSchema: z.ZodType<Prisma.attendance_recordsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsCreateInput>;
export const attendance_recordsCreateInputObjectZodSchema = makeSchema();
