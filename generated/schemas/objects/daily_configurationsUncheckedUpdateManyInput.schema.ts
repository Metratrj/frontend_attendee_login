import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  late_cutoff_time: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const daily_configurationsUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.daily_configurationsUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.daily_configurationsUncheckedUpdateManyInput>;
export const daily_configurationsUncheckedUpdateManyInputObjectZodSchema = makeSchema();
