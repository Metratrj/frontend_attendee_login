import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsSelectObjectSchema as studentsSelectObjectSchema } from './objects/studentsSelect.schema';
import { studentsUpdateManyMutationInputObjectSchema as studentsUpdateManyMutationInputObjectSchema } from './objects/studentsUpdateManyMutationInput.schema';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './objects/studentsWhereInput.schema';

export const studentsUpdateManyAndReturnSchema: z.ZodType<Prisma.studentsUpdateManyAndReturnArgs> = z.object({ select: studentsSelectObjectSchema.optional(), data: studentsUpdateManyMutationInputObjectSchema, where: studentsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.studentsUpdateManyAndReturnArgs>;

export const studentsUpdateManyAndReturnZodSchema = z.object({ select: studentsSelectObjectSchema.optional(), data: studentsUpdateManyMutationInputObjectSchema, where: studentsWhereInputObjectSchema.optional() }).strict();