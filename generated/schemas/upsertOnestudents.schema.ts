import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsSelectObjectSchema as studentsSelectObjectSchema } from './objects/studentsSelect.schema';
import { studentsIncludeObjectSchema as studentsIncludeObjectSchema } from './objects/studentsInclude.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './objects/studentsWhereUniqueInput.schema';
import { studentsCreateInputObjectSchema as studentsCreateInputObjectSchema } from './objects/studentsCreateInput.schema';
import { studentsUncheckedCreateInputObjectSchema as studentsUncheckedCreateInputObjectSchema } from './objects/studentsUncheckedCreateInput.schema';
import { studentsUpdateInputObjectSchema as studentsUpdateInputObjectSchema } from './objects/studentsUpdateInput.schema';
import { studentsUncheckedUpdateInputObjectSchema as studentsUncheckedUpdateInputObjectSchema } from './objects/studentsUncheckedUpdateInput.schema';

export const studentsUpsertOneSchema: z.ZodType<Prisma.studentsUpsertArgs> = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), where: studentsWhereUniqueInputObjectSchema, create: z.union([ studentsCreateInputObjectSchema, studentsUncheckedCreateInputObjectSchema ]), update: z.union([ studentsUpdateInputObjectSchema, studentsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.studentsUpsertArgs>;

export const studentsUpsertOneZodSchema = z.object({ select: studentsSelectObjectSchema.optional(), include: studentsIncludeObjectSchema.optional(), where: studentsWhereUniqueInputObjectSchema, create: z.union([ studentsCreateInputObjectSchema, studentsUncheckedCreateInputObjectSchema ]), update: z.union([ studentsUpdateInputObjectSchema, studentsUncheckedUpdateInputObjectSchema ]) }).strict();