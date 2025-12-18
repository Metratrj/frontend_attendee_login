import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './studentsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => studentsWhereInputObjectSchema).optional(),
  some: z.lazy(() => studentsWhereInputObjectSchema).optional(),
  none: z.lazy(() => studentsWhereInputObjectSchema).optional()
}).strict();
export const StudentsListRelationFilterObjectSchema: z.ZodType<Prisma.StudentsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudentsListRelationFilter>;
export const StudentsListRelationFilterObjectZodSchema = makeSchema();
