import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  student_id: z.literal(true).optional(),
  login_time: z.literal(true).optional(),
  status: z.literal(true).optional(),
  is_relogin: z.literal(true).optional(),
  session_token: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Attendance_recordsCountAggregateInputObjectSchema: z.ZodType<Prisma.Attendance_recordsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Attendance_recordsCountAggregateInputType>;
export const Attendance_recordsCountAggregateInputObjectZodSchema = makeSchema();
