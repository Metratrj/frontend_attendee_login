import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  firstname: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben.').max(250).optional(),
  lastname: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben.').max(250).optional(),
  username: z.string().min(2, 'Username muss mindestens 2 Zeichen haben.').max(250).optional(),
  email: z.email('Ungültiges eMail Format').optional(),
  password: SortOrderSchema.optional()
}).strict();
export const userCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.userCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.userCountOrderByAggregateInput>;
export const userCountOrderByAggregateInputObjectZodSchema = makeSchema();
