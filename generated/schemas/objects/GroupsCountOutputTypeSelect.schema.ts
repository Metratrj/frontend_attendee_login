import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  students: z.boolean().optional()
}).strict();
export const GroupsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GroupsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GroupsCountOutputTypeSelect>;
export const GroupsCountOutputTypeSelectObjectZodSchema = makeSchema();
