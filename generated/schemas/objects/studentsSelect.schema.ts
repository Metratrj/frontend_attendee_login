import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsFindManySchema as attendance_recordsFindManySchema } from '../findManyattendance_records.schema';
import { groupsArgsObjectSchema as groupsArgsObjectSchema } from './groupsArgs.schema';
import { StudentsCountOutputTypeArgsObjectSchema as StudentsCountOutputTypeArgsObjectSchema } from './StudentsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  firstname: z.boolean().optional(),
  lastname: z.boolean().optional(),
  password_hash: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  attendance_records: z.union([z.boolean(), z.lazy(() => attendance_recordsFindManySchema)]).optional(),
  groupid: z.boolean().optional(),
  group: z.union([z.boolean(), z.lazy(() => groupsArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudentsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const studentsSelectObjectSchema: z.ZodType<Prisma.studentsSelect> = makeSchema() as unknown as z.ZodType<Prisma.studentsSelect>;
export const studentsSelectObjectZodSchema = makeSchema();
