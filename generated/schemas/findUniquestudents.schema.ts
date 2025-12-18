import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsSelectObjectSchema as studentsSelectObjectSchema } from './objects/studentsSelect.schema';
import { studentsIncludeObjectSchema as studentsIncludeObjectSchema } from './objects/studentsInclude.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './objects/studentsWhereUniqueInput.schema';

export const studentsFindUniqueSchema: z.ZodType<Prisma.studentsFindUniqueArgs> = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), where: studentsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.studentsFindUniqueArgs>;

export const studentsFindUniqueZodSchema = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), where: studentsWhereUniqueInputObjectSchema }).strict();