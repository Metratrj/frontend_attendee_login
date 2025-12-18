import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsCreateNestedManyWithoutStudentsInputObjectSchema as attendance_recordsCreateNestedManyWithoutStudentsInputObjectSchema } from './attendance_recordsCreateNestedManyWithoutStudentsInput.schema';
import { groupsCreateNestedOneWithoutStudentsInputObjectSchema as groupsCreateNestedOneWithoutStudentsInputObjectSchema } from './groupsCreateNestedOneWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'),
  firstname: z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.').optional(),
  lastname: z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.').optional(),
  password_hash: z.string().max(255),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  attendance_records: z.lazy(() => attendance_recordsCreateNestedManyWithoutStudentsInputObjectSchema).optional(),
  group: z.lazy(() => groupsCreateNestedOneWithoutStudentsInputObjectSchema).optional()
}).strict();
export const studentsCreateInputObjectSchema: z.ZodType<Prisma.studentsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsCreateInput>;
export const studentsCreateInputObjectZodSchema = makeSchema();
