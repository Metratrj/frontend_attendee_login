import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInputObjectSchema as attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInputObjectSchema } from './attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstname: z.union([z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastname: z.union([z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password_hash: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  groupid: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attendance_records: z.lazy(() => attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInputObjectSchema).optional()
}).strict();
export const studentsUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.studentsUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUncheckedUpdateInput>;
export const studentsUncheckedUpdateInputObjectZodSchema = makeSchema();
