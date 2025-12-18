import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { studentsUpdateManyWithoutGroupNestedInputObjectSchema as studentsUpdateManyWithoutGroupNestedInputObjectSchema } from './studentsUpdateManyWithoutGroupNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(255).min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string().max(10).min(1, 'Bitte Farbe auswählen.'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  students: z.lazy(() => studentsUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
export const groupsUpdateInputObjectSchema: z.ZodType<Prisma.groupsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsUpdateInput>;
export const groupsUpdateInputObjectZodSchema = makeSchema();
