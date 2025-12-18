import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { studentsOrderByWithRelationInputObjectSchema as studentsOrderByWithRelationInputObjectSchema } from './studentsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  student_id: SortOrderSchema.optional(),
  login_time: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  is_relogin: SortOrderSchema.optional(),
  session_token: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  students: z.lazy(() => studentsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const attendance_recordsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.attendance_recordsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsOrderByWithRelationInput>;
export const attendance_recordsOrderByWithRelationInputObjectZodSchema = makeSchema();
