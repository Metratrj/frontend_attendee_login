import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsUncheckedCreateNestedManyWithoutStudentsInputObjectSchema as attendance_recordsUncheckedCreateNestedManyWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  password_hash: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  attendance_records: z.lazy(() => attendance_recordsUncheckedCreateNestedManyWithoutStudentsInputObjectSchema).optional()
}).strict();
export const studentsUncheckedCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.studentsUncheckedCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUncheckedCreateWithoutGroupInput>;
export const studentsUncheckedCreateWithoutGroupInputObjectZodSchema = makeSchema();
