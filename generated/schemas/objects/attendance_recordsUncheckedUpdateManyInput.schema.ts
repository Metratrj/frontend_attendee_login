import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { attendance_statusSchema } from '../enums/attendance_status.schema';
import { Enumattendance_statusFieldUpdateOperationsInputObjectSchema as Enumattendance_statusFieldUpdateOperationsInputObjectSchema } from './Enumattendance_statusFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  student_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  login_time: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([attendance_statusSchema, z.lazy(() => Enumattendance_statusFieldUpdateOperationsInputObjectSchema)]).optional(),
  is_relogin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  session_token: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const attendance_recordsUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.attendance_recordsUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsUncheckedUpdateManyInput>;
export const attendance_recordsUncheckedUpdateManyInputObjectZodSchema = makeSchema();
