import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsSelectObjectSchema as attendance_recordsSelectObjectSchema } from './objects/attendance_recordsSelect.schema';
import { attendance_recordsIncludeObjectSchema as attendance_recordsIncludeObjectSchema } from './objects/attendance_recordsInclude.schema';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './objects/attendance_recordsWhereUniqueInput.schema';

export const attendance_recordsFindUniqueOrThrowSchema: z.ZodType<Prisma.attendance_recordsFindUniqueOrThrowArgs> = z.object({ select: attendance_recordsSelectObjectSchema.optional(), include: attendance_recordsIncludeObjectSchema.optional(), where: attendance_recordsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.attendance_recordsFindUniqueOrThrowArgs>;

export const attendance_recordsFindUniqueOrThrowZodSchema = z.object({ select: attendance_recordsSelectObjectSchema.optional(), include: attendance_recordsIncludeObjectSchema.optional(), where: attendance_recordsWhereUniqueInputObjectSchema }).strict();