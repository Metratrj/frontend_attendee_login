import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: z.string().min(2, 'Username muss mindestens 2 Zeichen haben.').max(250).optional(),
  firstname: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben.').max(250).optional(),
  lastname: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben.').max(250).optional(),
  password_hash: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  groupid: SortOrderSchema.optional()
}).strict();
export const studentsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.studentsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsCountOrderByAggregateInput>;
export const studentsCountOrderByAggregateInputObjectZodSchema = makeSchema();
