import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { attendance_recordsUpdateManyWithoutStudentsNestedInputObjectSchema as attendance_recordsUpdateManyWithoutStudentsNestedInputObjectSchema } from './attendance_recordsUpdateManyWithoutStudentsNestedInput.schema';
import { groupsUpdateOneWithoutStudentsNestedInputObjectSchema as groupsUpdateOneWithoutStudentsNestedInputObjectSchema } from './groupsUpdateOneWithoutStudentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstname: z.union([z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastname: z.union([z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password_hash: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  attendance_records: z.lazy(() => attendance_recordsUpdateManyWithoutStudentsNestedInputObjectSchema).optional(),
  group: z.lazy(() => groupsUpdateOneWithoutStudentsNestedInputObjectSchema).optional()
}).strict();
export const studentsUpdateInputObjectSchema: z.ZodType<Prisma.studentsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUpdateInput>;
export const studentsUpdateInputObjectZodSchema = makeSchema();
