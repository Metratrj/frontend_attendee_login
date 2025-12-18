import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { groupsUpdateOneWithoutStudentsNestedInputObjectSchema as groupsUpdateOneWithoutStudentsNestedInputObjectSchema } from './groupsUpdateOneWithoutStudentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstname: z.union([z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastname: z.union([z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password_hash: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  group: z.lazy(() => groupsUpdateOneWithoutStudentsNestedInputObjectSchema).optional()
}).strict();
export const studentsUpdateWithoutAttendance_recordsInputObjectSchema: z.ZodType<Prisma.studentsUpdateWithoutAttendance_recordsInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUpdateWithoutAttendance_recordsInput>;
export const studentsUpdateWithoutAttendance_recordsInputObjectZodSchema = makeSchema();
