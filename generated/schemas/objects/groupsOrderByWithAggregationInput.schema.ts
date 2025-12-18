import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { groupsCountOrderByAggregateInputObjectSchema as groupsCountOrderByAggregateInputObjectSchema } from './groupsCountOrderByAggregateInput.schema';
import { groupsMaxOrderByAggregateInputObjectSchema as groupsMaxOrderByAggregateInputObjectSchema } from './groupsMaxOrderByAggregateInput.schema';
import { groupsMinOrderByAggregateInputObjectSchema as groupsMinOrderByAggregateInputObjectSchema } from './groupsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.string().min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.').optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  color: z.string().min(1, 'Bitte Farbe auswählen.').optional(),
  _count: z.lazy(() => groupsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => groupsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => groupsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const groupsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.groupsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsOrderByWithAggregationInput>;
export const groupsOrderByWithAggregationInputObjectZodSchema = makeSchema();
