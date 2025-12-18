import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { userSelectObjectSchema as userSelectObjectSchema } from './userSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => userSelectObjectSchema).optional()
}).strict();
export const userArgsObjectSchema = makeSchema();
export const userArgsObjectZodSchema = makeSchema();
