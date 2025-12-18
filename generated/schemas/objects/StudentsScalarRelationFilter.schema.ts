import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './studentsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => studentsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => studentsWhereInputObjectSchema).optional()
}).strict();
export const StudentsScalarRelationFilterObjectSchema: z.ZodType<Prisma.StudentsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StudentsScalarRelationFilter>;
export const StudentsScalarRelationFilterObjectZodSchema = makeSchema();
