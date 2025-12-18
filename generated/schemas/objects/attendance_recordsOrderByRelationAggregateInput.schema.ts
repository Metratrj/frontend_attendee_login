import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const attendance_recordsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.attendance_recordsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsOrderByRelationAggregateInput>;
export const attendance_recordsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
