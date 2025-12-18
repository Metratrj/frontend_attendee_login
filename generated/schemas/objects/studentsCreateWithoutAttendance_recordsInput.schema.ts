import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { groupsCreateNestedOneWithoutStudentsInputObjectSchema as groupsCreateNestedOneWithoutStudentsInputObjectSchema } from './groupsCreateNestedOneWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'),
  firstname: z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.').optional(),
  lastname: z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.').optional(),
  password_hash: z.string().max(255),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  group: z.lazy(() => groupsCreateNestedOneWithoutStudentsInputObjectSchema).optional()
}).strict();
export const studentsCreateWithoutAttendance_recordsInputObjectSchema: z.ZodType<Prisma.studentsCreateWithoutAttendance_recordsInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsCreateWithoutAttendance_recordsInput>;
export const studentsCreateWithoutAttendance_recordsInputObjectZodSchema = makeSchema();
