import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsSelectObjectSchema as attendance_recordsSelectObjectSchema } from './attendance_recordsSelect.schema';
import { attendance_recordsIncludeObjectSchema as attendance_recordsIncludeObjectSchema } from './attendance_recordsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => attendance_recordsSelectObjectSchema).optional(),
  include: z.lazy(() => attendance_recordsIncludeObjectSchema).optional()
}).strict();
export const attendance_recordsArgsObjectSchema = makeSchema();
export const attendance_recordsArgsObjectZodSchema = makeSchema();
