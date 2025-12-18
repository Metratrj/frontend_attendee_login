import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { studentsOrderByRelationAggregateInputObjectSchema as studentsOrderByRelationAggregateInputObjectSchema } from './studentsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.string().min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.').optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  color: z.string().min(1, 'Bitte Farbe auswählen.').optional(),
  students: z.lazy(() => studentsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const groupsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.groupsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsOrderByWithRelationInput>;
export const groupsOrderByWithRelationInputObjectZodSchema = makeSchema();
