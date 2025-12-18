import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsCreateManyInputObjectSchema as studentsCreateManyInputObjectSchema } from './objects/studentsCreateManyInput.schema';

export const studentsCreateManySchema: z.ZodType<Prisma.studentsCreateManyArgs> = z.object({ data: z.union([ studentsCreateManyInputObjectSchema, z.array(studentsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.studentsCreateManyArgs>;

export const studentsCreateManyZodSchema = z.object({ data: z.union([ studentsCreateManyInputObjectSchema, z.array(studentsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();