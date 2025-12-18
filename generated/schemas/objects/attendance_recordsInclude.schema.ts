import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsArgsObjectSchema as studentsArgsObjectSchema } from './studentsArgs.schema'

const makeSchema = () => z.object({
  students: z.union([z.boolean(), z.lazy(() => studentsArgsObjectSchema)]).optional()
}).strict();
export const attendance_recordsIncludeObjectSchema: z.ZodType<Prisma.attendance_recordsInclude> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsInclude>;
export const attendance_recordsIncludeObjectZodSchema = makeSchema();
