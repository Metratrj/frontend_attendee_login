import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  login_time: z.coerce.date().optional(),
  status: attendance_statusSchema,
  is_relogin: z.boolean().optional(),
  session_token: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.attendance_recordsUncheckedCreateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsUncheckedCreateWithoutStudentsInput>;
export const attendance_recordsUncheckedCreateWithoutStudentsInputObjectZodSchema = makeSchema();
