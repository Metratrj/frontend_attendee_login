import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsUncheckedCreateNestedManyWithoutStudentsInputObjectSchema as attendance_recordsUncheckedCreateNestedManyWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'),
  firstname: z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.').optional(),
  lastname: z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.').optional(),
  password_hash: z.string().max(255),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  groupid: z.string().optional().nullable(),
  attendance_records: z.lazy(() => attendance_recordsUncheckedCreateNestedManyWithoutStudentsInputObjectSchema).optional()
}).strict();
export const studentsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.studentsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUncheckedCreateInput>;
export const studentsUncheckedCreateInputObjectZodSchema = makeSchema();
