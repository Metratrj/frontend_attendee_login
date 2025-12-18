import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { studentsIncludeObjectSchema as studentsIncludeObjectSchema } from './objects/studentsInclude.schema';
import { studentsOrderByWithRelationInputObjectSchema as studentsOrderByWithRelationInputObjectSchema } from './objects/studentsOrderByWithRelationInput.schema';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './objects/studentsWhereInput.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './objects/studentsWhereUniqueInput.schema';
import { StudentsScalarFieldEnumSchema } from './enums/StudentsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const studentsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.studentsSelect> = z.object({
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

export const studentsFindFirstOrThrowSelectZodSchema = z.object({
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

export const studentsFindFirstOrThrowSchema: z.ZodType<Prisma.studentsFindFirstOrThrowArgs> = z.object({ select: studentsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => studentsIncludeObjectSchema.optional()), orderBy: z.union([studentsOrderByWithRelationInputObjectSchema, studentsOrderByWithRelationInputObjectSchema.array()]).optional(), where: studentsWhereInputObjectSchema.optional(), cursor: studentsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentsScalarFieldEnumSchema, StudentsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.studentsFindFirstOrThrowArgs>;

export const studentsFindFirstOrThrowZodSchema = z.object({ select: studentsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => studentsIncludeObjectSchema.optional()), orderBy: z.union([studentsOrderByWithRelationInputObjectSchema, studentsOrderByWithRelationInputObjectSchema.array()]).optional(), where: studentsWhereInputObjectSchema.optional(), cursor: studentsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentsScalarFieldEnumSchema, StudentsScalarFieldEnumSchema.array()]).optional() }).strict();