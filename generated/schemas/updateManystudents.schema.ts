import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsUpdateManyMutationInputObjectSchema as studentsUpdateManyMutationInputObjectSchema } from './objects/studentsUpdateManyMutationInput.schema';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './objects/studentsWhereInput.schema';

export const studentsUpdateManySchema: z.ZodType<Prisma.studentsUpdateManyArgs> = z.object({ data: studentsUpdateManyMutationInputObjectSchema, where: studentsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.studentsUpdateManyArgs>;

export const studentsUpdateManyZodSchema = z.object({ data: studentsUpdateManyMutationInputObjectSchema, where: studentsWhereInputObjectSchema.optional() }).strict();