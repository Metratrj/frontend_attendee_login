import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsArgsObjectSchema as studentsArgsObjectSchema } from './studentsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  student_id: z.boolean().optional(),
  login_time: z.boolean().optional(),
  status: z.boolean().optional(),
  is_relogin: z.boolean().optional(),
  session_token: z.boolean().optional(),
  created_at: z.boolean().optional(),
  students: z.union([z.boolean(), z.lazy(() => studentsArgsObjectSchema)]).optional()
}).strict();
export const attendance_recordsSelectObjectSchema: z.ZodType<Prisma.attendance_recordsSelect> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsSelect>;
export const attendance_recordsSelectObjectZodSchema = makeSchema();
