import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { groupsSelectObjectSchema as groupsSelectObjectSchema } from './groupsSelect.schema';
import { groupsIncludeObjectSchema as groupsIncludeObjectSchema } from './groupsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => groupsSelectObjectSchema).optional(),
  include: z.lazy(() => groupsIncludeObjectSchema).optional()
}).strict();
export const groupsArgsObjectSchema = makeSchema();
export const groupsArgsObjectZodSchema = makeSchema();
