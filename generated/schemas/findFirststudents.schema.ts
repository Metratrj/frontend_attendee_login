import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsIncludeObjectSchema as studentsIncludeObjectSchema } from './objects/studentsInclude.schema';
import { studentsOrderByWithRelationInputObjectSchema as studentsOrderByWithRelationInputObjectSchema } from './objects/studentsOrderByWithRelationInput.schema';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './objects/studentsWhereInput.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './objects/studentsWhereUniqueInput.schema';
import { StudentsScalarFieldEnumSchema } from './enums/StudentsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const studentsFindFirstSelectSchema: z.ZodType<Prisma.studentsSelect> = z.object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    firstname: z.boolean().optional(),
    lastname: z.boolean().optional(),
    password_hash: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    attendance_records: z.boolean().optional(),
    groupid: z.boolean().optional(),
    group: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.studentsSelect>;

export const studentsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    firstname: z.boolean().optional(),
    lastname: z.boolean().optional(),
    password_hash: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    attendance_records: z.boolean().optional(),
    groupid: z.boolean().optional(),
    group: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const studentsFindFirstSchema: z.ZodType<Prisma.studentsFindFirstArgs> = z.object({ select: studentsFindFirstSelectSchema.optional(), include: z.lazy(() => studentsIncludeObjectSchema.optional()), orderBy: z.union([studentsOrderByWithRelationInputObjectSchema, studentsOrderByWithRelationInputObjectSchema.array()]).optional(), where: studentsWhereInputObjectSchema.optional(), cursor: studentsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentsScalarFieldEnumSchema, StudentsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.studentsFindFirstArgs>;

export const studentsFindFirstZodSchema = z.object({ select: studentsFindFirstSelectSchema.optional(), include: z.lazy(() => studentsIncludeObjectSchema.optional()), orderBy: z.union([studentsOrderByWithRelationInputObjectSchema, studentsOrderByWithRelationInputObjectSchema.array()]).optional(), where: studentsWhereInputObjectSchema.optional(), cursor: studentsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentsScalarFieldEnumSchema, StudentsScalarFieldEnumSchema.array()]).optional() }).strict();