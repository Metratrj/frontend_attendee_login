import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsIncludeObjectSchema as attendance_recordsIncludeObjectSchema } from './objects/attendance_recordsInclude.schema';
import { attendance_recordsOrderByWithRelationInputObjectSchema as attendance_recordsOrderByWithRelationInputObjectSchema } from './objects/attendance_recordsOrderByWithRelationInput.schema';
import { attendance_recordsWhereInputObjectSchema as attendance_recordsWhereInputObjectSchema } from './objects/attendance_recordsWhereInput.schema';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './objects/attendance_recordsWhereUniqueInput.schema';
import { AttendanceRecordsScalarFieldEnumSchema } from './enums/AttendanceRecordsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const attendance_recordsFindManySelectSchema: z.ZodType<Prisma.attendance_recordsSelect> = z.object({
    id: z.boolean().optional(),
    student_id: z.boolean().optional(),
    login_time: z.boolean().optional(),
    status: z.boolean().optional(),
    is_relogin: z.boolean().optional(),
    session_token: z.boolean().optional(),
    created_at: z.boolean().optional(),
    students: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.attendance_recordsSelect>;

export const attendance_recordsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    student_id: z.boolean().optional(),
    login_time: z.boolean().optional(),
    status: z.boolean().optional(),
    is_relogin: z.boolean().optional(),
    session_token: z.boolean().optional(),
    created_at: z.boolean().optional(),
    students: z.boolean().optional()
  }).strict();

export const attendance_recordsFindManySchema: z.ZodType<Prisma.attendance_recordsFindManyArgs> = z.object({ select: attendance_recordsFindManySelectSchema.optional(), include: z.lazy(() => attendance_recordsIncludeObjectSchema.optional()), orderBy: z.union([attendance_recordsOrderByWithRelationInputObjectSchema, attendance_recordsOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendance_recordsWhereInputObjectSchema.optional(), cursor: attendance_recordsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttendanceRecordsScalarFieldEnumSchema, AttendanceRecordsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.attendance_recordsFindManyArgs>;

export const attendance_recordsFindManyZodSchema = z.object({ select: attendance_recordsFindManySelectSchema.optional(), include: z.lazy(() => attendance_recordsIncludeObjectSchema.optional()), orderBy: z.union([attendance_recordsOrderByWithRelationInputObjectSchema, attendance_recordsOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendance_recordsWhereInputObjectSchema.optional(), cursor: attendance_recordsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttendanceRecordsScalarFieldEnumSchema, AttendanceRecordsScalarFieldEnumSchema.array()]).optional() }).strict();