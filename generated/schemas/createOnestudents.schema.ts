import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsSelectObjectSchema as studentsSelectObjectSchema } from './objects/studentsSelect.schema';
import { studentsIncludeObjectSchema as studentsIncludeObjectSchema } from './objects/studentsInclude.schema';
import { studentsCreateInputObjectSchema as studentsCreateInputObjectSchema } from './objects/studentsCreateInput.schema';
import { studentsUncheckedCreateInputObjectSchema as studentsUncheckedCreateInputObjectSchema } from './objects/studentsUncheckedCreateInput.schema';

export const studentsCreateOneSchema: z.ZodType<Prisma.studentsCreateArgs> = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), data: z.union([studentsCreateInputObjectSchema, studentsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.studentsCreateArgs>;

export const studentsCreateOneZodSchema = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), data: z.union([studentsCreateInputObjectSchema, studentsUncheckedCreateInputObjectSchema]) }).strict();