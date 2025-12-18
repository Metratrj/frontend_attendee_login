import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInputObjectSchema as attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInputObjectSchema } from './attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstname: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastname: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password_hash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  attendance_records: z.lazy(() => attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInputObjectSchema).optional()
}).strict();
export const studentsUncheckedUpdateWithoutGroupInputObjectSchema: z.ZodType<Prisma.studentsUncheckedUpdateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUncheckedUpdateWithoutGroupInput>;
export const studentsUncheckedUpdateWithoutGroupInputObjectZodSchema = makeSchema();
