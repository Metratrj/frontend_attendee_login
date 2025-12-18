import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsCreateNestedManyWithoutStudentsInputObjectSchema as attendance_recordsCreateNestedManyWithoutStudentsInputObjectSchema } from './attendance_recordsCreateNestedManyWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'),
  firstname: z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.').optional(),
  lastname: z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.').optional(),
  password_hash: z.string().max(255),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  attendance_records: z.lazy(() => attendance_recordsCreateNestedManyWithoutStudentsInputObjectSchema).optional()
}).strict();
export const studentsCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.studentsCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsCreateWithoutGroupInput>;
export const studentsCreateWithoutGroupInputObjectZodSchema = makeSchema();
