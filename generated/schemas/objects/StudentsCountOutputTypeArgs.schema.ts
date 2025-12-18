import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StudentsCountOutputTypeSelectObjectSchema as StudentsCountOutputTypeSelectObjectSchema } from './StudentsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StudentsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StudentsCountOutputTypeArgsObjectSchema = makeSchema();
export const StudentsCountOutputTypeArgsObjectZodSchema = makeSchema();
