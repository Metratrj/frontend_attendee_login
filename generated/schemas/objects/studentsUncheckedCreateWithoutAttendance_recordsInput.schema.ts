import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  password_hash: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  groupid: z.string().optional().nullable()
}).strict();
export const studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema: z.ZodType<Prisma.studentsUncheckedCreateWithoutAttendance_recordsInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUncheckedCreateWithoutAttendance_recordsInput>;
export const studentsUncheckedCreateWithoutAttendance_recordsInputObjectZodSchema = makeSchema();
