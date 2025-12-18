import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsFindManySchema as attendance_recordsFindManySchema } from '../findManyattendance_records.schema';
import { groupsArgsObjectSchema as groupsArgsObjectSchema } from './groupsArgs.schema';
import { StudentsCountOutputTypeArgsObjectSchema as StudentsCountOutputTypeArgsObjectSchema } from './StudentsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  attendance_records: z.union([z.boolean(), z.lazy(() => attendance_recordsFindManySchema)]).optional(),
  group: z.union([z.boolean(), z.lazy(() => groupsArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudentsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const studentsIncludeObjectSchema: z.ZodType<Prisma.studentsInclude> = makeSchema() as unknown as z.ZodType<Prisma.studentsInclude>;
export const studentsIncludeObjectZodSchema = makeSchema();
