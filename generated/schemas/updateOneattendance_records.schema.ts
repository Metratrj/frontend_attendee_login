import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsSelectObjectSchema as attendance_recordsSelectObjectSchema } from './objects/attendance_recordsSelect.schema';
import { attendance_recordsIncludeObjectSchema as attendance_recordsIncludeObjectSchema } from './objects/attendance_recordsInclude.schema';
import { attendance_recordsUpdateInputObjectSchema as attendance_recordsUpdateInputObjectSchema } from './objects/attendance_recordsUpdateInput.schema';
import { attendance_recordsUncheckedUpdateInputObjectSchema as attendance_recordsUncheckedUpdateInputObjectSchema } from './objects/attendance_recordsUncheckedUpdateInput.schema';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './objects/attendance_recordsWhereUniqueInput.schema';

export const attendance_recordsUpdateOneSchema: z.ZodType<Prisma.attendance_recordsUpdateArgs> = z.object({ select: attendance_recordsSelectObjectSchema.optional(), include: attendance_recordsIncludeObjectSchema.optional(), data: z.union([attendance_recordsUpdateInputObjectSchema, attendance_recordsUncheckedUpdateInputObjectSchema]), where: attendance_recordsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.attendance_recordsUpdateArgs>;

export const attendance_recordsUpdateOneZodSchema = z.object({ select: attendance_recordsSelectObjectSchema.optional(), include: attendance_recordsIncludeObjectSchema.optional(), data: z.union([attendance_recordsUpdateInputObjectSchema, attendance_recordsUncheckedUpdateInputObjectSchema]), where: attendance_recordsWhereUniqueInputObjectSchema }).strict();