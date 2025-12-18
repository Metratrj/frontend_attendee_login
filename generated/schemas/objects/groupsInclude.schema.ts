import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsFindManySchema as studentsFindManySchema } from '../findManystudents.schema';
import { GroupsCountOutputTypeArgsObjectSchema as GroupsCountOutputTypeArgsObjectSchema } from './GroupsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  students: z.union([z.boolean(), z.lazy(() => studentsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GroupsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const groupsIncludeObjectSchema: z.ZodType<Prisma.groupsInclude> = makeSchema() as unknown as z.ZodType<Prisma.groupsInclude>;
export const groupsIncludeObjectZodSchema = makeSchema();
