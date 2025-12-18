import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsSelectObjectSchema as studentsSelectObjectSchema } from './studentsSelect.schema';
import { studentsIncludeObjectSchema as studentsIncludeObjectSchema } from './studentsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => studentsSelectObjectSchema).optional(),
  include: z.lazy(() => studentsIncludeObjectSchema).optional()
}).strict();
export const studentsArgsObjectSchema = makeSchema();
export const studentsArgsObjectZodSchema = makeSchema();
