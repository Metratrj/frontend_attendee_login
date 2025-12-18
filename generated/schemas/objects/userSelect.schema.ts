import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  firstname: z.boolean().optional(),
  lastname: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional()
}).strict();
export const userSelectObjectSchema: z.ZodType<Prisma.userSelect> = makeSchema() as unknown as z.ZodType<Prisma.userSelect>;
export const userSelectObjectZodSchema = makeSchema();
