import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  firstname: z.literal(true).optional(),
  lastname: z.literal(true).optional(),
  username: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserCountAggregateInputObjectSchema: z.ZodType<Prisma.UserCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserCountAggregateInputType>;
export const UserCountAggregateInputObjectZodSchema = makeSchema();
