import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { attendance_recordsOrderByRelationAggregateInputObjectSchema as attendance_recordsOrderByRelationAggregateInputObjectSchema } from './attendance_recordsOrderByRelationAggregateInput.schema';
import { groupsOrderByWithRelationInputObjectSchema as groupsOrderByWithRelationInputObjectSchema } from './groupsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: z.string().min(2, 'Username muss mindestens 2 Zeichen haben.').max(250).optional(),
  firstname: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben.').max(250).optional(),
  lastname: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben.').max(250).optional(),
  password_hash: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  groupid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  attendance_records: z.lazy(() => attendance_recordsOrderByRelationAggregateInputObjectSchema).optional(),
  group: z.lazy(() => groupsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const studentsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.studentsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsOrderByWithRelationInput>;
export const studentsOrderByWithRelationInputObjectZodSchema = makeSchema();
