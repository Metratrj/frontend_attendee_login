import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './objects/studentsWhereInput.schema';

export const studentsDeleteManySchema: z.ZodType<Prisma.studentsDeleteManyArgs> = z.object({ where: studentsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.studentsDeleteManyArgs>;

export const studentsDeleteManyZodSchema = z.object({ where: studentsWhereInputObjectSchema.optional() }).strict();