import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsSelectObjectSchema as studentsSelectObjectSchema } from './objects/studentsSelect.schema';
import { studentsIncludeObjectSchema as studentsIncludeObjectSchema } from './objects/studentsInclude.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './objects/studentsWhereUniqueInput.schema';

export const studentsDeleteOneSchema: z.ZodType<Prisma.studentsDeleteArgs> = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), where: studentsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.studentsDeleteArgs>;

export const studentsDeleteOneZodSchema = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), where: studentsWhereUniqueInputObjectSchema }).strict();