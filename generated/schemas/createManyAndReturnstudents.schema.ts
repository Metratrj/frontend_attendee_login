import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsSelectObjectSchema as studentsSelectObjectSchema } from './objects/studentsSelect.schema';
import { studentsCreateManyInputObjectSchema as studentsCreateManyInputObjectSchema } from './objects/studentsCreateManyInput.schema';

export const studentsCreateManyAndReturnSchema: z.ZodType<Prisma.studentsCreateManyAndReturnArgs> = z.object({ select: studentsSelectObjectSchema.optional(), data: z.union([ studentsCreateManyInputObjectSchema, z.array(studentsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.studentsCreateManyAndReturnArgs>;

export const studentsCreateManyAndReturnZodSchema = z.object({ select: studentsSelectObjectSchema.optional(), data: z.union([ studentsCreateManyInputObjectSchema, z.array(studentsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();