import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { attendance_recordsCountOrderByAggregateInputObjectSchema as attendance_recordsCountOrderByAggregateInputObjectSchema } from './attendance_recordsCountOrderByAggregateInput.schema';
import { attendance_recordsMaxOrderByAggregateInputObjectSchema as attendance_recordsMaxOrderByAggregateInputObjectSchema } from './attendance_recordsMaxOrderByAggregateInput.schema';
import { attendance_recordsMinOrderByAggregateInputObjectSchema as attendance_recordsMinOrderByAggregateInputObjectSchema } from './attendance_recordsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  student_id: SortOrderSchema.optional(),
  login_time: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  is_relogin: SortOrderSchema.optional(),
  session_token: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => attendance_recordsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => attendance_recordsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => attendance_recordsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const attendance_recordsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.attendance_recordsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsOrderByWithAggregationInput>;
export const attendance_recordsOrderByWithAggregationInputObjectZodSchema = makeSchema();
