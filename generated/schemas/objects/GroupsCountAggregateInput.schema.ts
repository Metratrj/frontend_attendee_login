import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  color: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GroupsCountAggregateInputObjectSchema: z.ZodType<Prisma.GroupsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupsCountAggregateInputType>;
export const GroupsCountAggregateInputObjectZodSchema = makeSchema();
