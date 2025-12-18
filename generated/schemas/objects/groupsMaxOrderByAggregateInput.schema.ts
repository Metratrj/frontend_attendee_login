import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.string().min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.').optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  color: z.string().min(1, 'Bitte Farbe auswählen.').optional()
}).strict();
export const groupsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.groupsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsMaxOrderByAggregateInput>;
export const groupsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
