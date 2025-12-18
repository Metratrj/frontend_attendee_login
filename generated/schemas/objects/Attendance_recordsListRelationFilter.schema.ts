import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsWhereInputObjectSchema as attendance_recordsWhereInputObjectSchema } from './attendance_recordsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => attendance_recordsWhereInputObjectSchema).optional(),
  some: z.lazy(() => attendance_recordsWhereInputObjectSchema).optional(),
  none: z.lazy(() => attendance_recordsWhereInputObjectSchema).optional()
}).strict();
export const Attendance_recordsListRelationFilterObjectSchema: z.ZodType<Prisma.Attendance_recordsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Attendance_recordsListRelationFilter>;
export const Attendance_recordsListRelationFilterObjectZodSchema = makeSchema();
