import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  firstname: z.literal(true).optional(),
  lastname: z.literal(true).optional(),
  password_hash: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  groupid: z.literal(true).optional()
}).strict();
export const StudentsMaxAggregateInputObjectSchema: z.ZodType<Prisma.StudentsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudentsMaxAggregateInputType>;
export const StudentsMaxAggregateInputObjectZodSchema = makeSchema();
