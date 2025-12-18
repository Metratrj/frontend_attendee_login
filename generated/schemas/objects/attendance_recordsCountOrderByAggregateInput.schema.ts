import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  student_id: SortOrderSchema.optional(),
  login_time: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  is_relogin: SortOrderSchema.optional(),
  session_token: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const attendance_recordsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.attendance_recordsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsCountOrderByAggregateInput>;
export const attendance_recordsCountOrderByAggregateInputObjectZodSchema = makeSchema();
