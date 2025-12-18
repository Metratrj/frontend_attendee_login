import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  student_id: z.string(),
  login_time: z.coerce.date().optional(),
  status: attendance_statusSchema,
  is_relogin: z.boolean().optional(),
  session_token: z.string().max(255),
  created_at: z.coerce.date().optional()
}).strict();
export const attendance_recordsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.attendance_recordsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsUncheckedCreateInput>;
export const attendance_recordsUncheckedCreateInputObjectZodSchema = makeSchema();
