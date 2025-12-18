import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsSelectObjectSchema as attendance_recordsSelectObjectSchema } from './objects/attendance_recordsSelect.schema';
import { attendance_recordsIncludeObjectSchema as attendance_recordsIncludeObjectSchema } from './objects/attendance_recordsInclude.schema';
import { attendance_recordsCreateInputObjectSchema as attendance_recordsCreateInputObjectSchema } from './objects/attendance_recordsCreateInput.schema';
import { attendance_recordsUncheckedCreateInputObjectSchema as attendance_recordsUncheckedCreateInputObjectSchema } from './objects/attendance_recordsUncheckedCreateInput.schema';

export const attendance_recordsCreateOneSchema: z.ZodType<Prisma.attendance_recordsCreateArgs> = z.object({ select: attendance_recordsSelectObjectSchema.optional(), include: attendance_recordsIncludeObjectSchema.optional(), data: z.union([attendance_recordsCreateInputObjectSchema, attendance_recordsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.attendance_recordsCreateArgs>;

export const attendance_recordsCreateOneZodSchema = z.object({ select: attendance_recordsSelectObjectSchema.optional(), include: attendance_recordsIncludeObjectSchema.optional(), data: z.union([attendance_recordsCreateInputObjectSchema, attendance_recordsUncheckedCreateInputObjectSchema]) }).strict();