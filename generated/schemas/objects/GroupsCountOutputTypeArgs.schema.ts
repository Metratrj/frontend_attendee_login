import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupsCountOutputTypeSelectObjectSchema as GroupsCountOutputTypeSelectObjectSchema } from './GroupsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GroupsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const GroupsCountOutputTypeArgsObjectSchema = makeSchema();
export const GroupsCountOutputTypeArgsObjectZodSchema = makeSchema();
