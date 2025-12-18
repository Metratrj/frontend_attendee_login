import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsOrderByWithRelationInputObjectSchema as studentsOrderByWithRelationInputObjectSchema } from './objects/studentsOrderByWithRelationInput.schema';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './objects/studentsWhereInput.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './objects/studentsWhereUniqueInput.schema';
import { StudentsCountAggregateInputObjectSchema as StudentsCountAggregateInputObjectSchema } from './objects/StudentsCountAggregateInput.schema';
import { StudentsMinAggregateInputObjectSchema as StudentsMinAggregateInputObjectSchema } from './objects/StudentsMinAggregateInput.schema';
import { StudentsMaxAggregateInputObjectSchema as StudentsMaxAggregateInputObjectSchema } from './objects/StudentsMaxAggregateInput.schema';

export const studentsAggregateSchema: z.ZodType<Prisma.studentsAggregateArgs> = z.object({ orderBy: z.union([studentsOrderByWithRelationInputObjectSchema, studentsOrderByWithRelationInputObjectSchema.array()]).optional(), where: studentsWhereInputObjectSchema.optional(), cursor: studentsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StudentsCountAggregateInputObjectSchema ]).optional(), _min: StudentsMinAggregateInputObjectSchema.optional(), _max: StudentsMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.studentsAggregateArgs>;

export const studentsAggregateZodSchema = z.object({ orderBy: z.union([studentsOrderByWithRelationInputObjectSchema, studentsOrderByWithRelationInputObjectSchema.array()]).optional(), where: studentsWhereInputObjectSchema.optional(), cursor: studentsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StudentsCountAggregateInputObjectSchema ]).optional(), _min: StudentsMinAggregateInputObjectSchema.optional(), _max: StudentsMaxAggregateInputObjectSchema.optional() }).strict();