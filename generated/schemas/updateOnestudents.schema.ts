import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsSelectObjectSchema as studentsSelectObjectSchema } from './objects/studentsSelect.schema';
import { studentsIncludeObjectSchema as studentsIncludeObjectSchema } from './objects/studentsInclude.schema';
import { studentsUpdateInputObjectSchema as studentsUpdateInputObjectSchema } from './objects/studentsUpdateInput.schema';
import { studentsUncheckedUpdateInputObjectSchema as studentsUncheckedUpdateInputObjectSchema } from './objects/studentsUncheckedUpdateInput.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './objects/studentsWhereUniqueInput.schema';

export const studentsUpdateOneSchema: z.ZodType<Prisma.studentsUpdateArgs> = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), data: z.union([studentsUpdateInputObjectSchema, studentsUncheckedUpdateInputObjectSchema]), where: studentsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.studentsUpdateArgs>;

export const studentsUpdateOneZodSchema = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), data: z.union([studentsUpdateInputObjectSchema, studentsUncheckedUpdateInputObjectSchema]), where: studentsWhereUniqueInputObjectSchema }).strict();