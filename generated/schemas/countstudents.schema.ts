import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsOrderByWithRelationInputObjectSchema as studentsOrderByWithRelationInputObjectSchema } from './objects/studentsOrderByWithRelationInput.schema';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './objects/studentsWhereInput.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './objects/studentsWhereUniqueInput.schema';
import { StudentsCountAggregateInputObjectSchema as StudentsCountAggregateInputObjectSchema } from './objects/StudentsCountAggregateInput.schema';

export const studentsCountSchema: z.ZodType<Prisma.studentsCountArgs> = z.object({ orderBy: z.union([studentsOrderByWithRelationInputObjectSchema, studentsOrderByWithRelationInputObjectSchema.array()]).optional(), where: studentsWhereInputObjectSchema.optional(), cursor: studentsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudentsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.studentsCountArgs>;

export const studentsCountZodSchema = z.object({ orderBy: z.union([studentsOrderByWithRelationInputObjectSchema, studentsOrderByWithRelationInputObjectSchema.array()]).optional(), where: studentsWhereInputObjectSchema.optional(), cursor: studentsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StudentsCountAggregateInputObjectSchema ]).optional() }).strict();