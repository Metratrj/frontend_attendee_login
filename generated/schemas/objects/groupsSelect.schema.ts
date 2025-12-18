import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsFindManySchema as studentsFindManySchema } from '../findManystudents.schema';
import { GroupsCountOutputTypeArgsObjectSchema as GroupsCountOutputTypeArgsObjectSchema } from './GroupsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  students: z.union([z.boolean(), z.lazy(() => studentsFindManySchema)]).optional(),
  color: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => GroupsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const groupsSelectObjectSchema: z.ZodType<Prisma.groupsSelect> = makeSchema() as unknown as z.ZodType<Prisma.groupsSelect>;
export const groupsSelectObjectZodSchema = makeSchema();
