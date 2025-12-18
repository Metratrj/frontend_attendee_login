import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsWhereInputObjectSchema as attendance_recordsWhereInputObjectSchema } from './objects/attendance_recordsWhereInput.schema';

export const attendance_recordsDeleteManySchema: z.ZodType<Prisma.attendance_recordsDeleteManyArgs> = z.object({ where: attendance_recordsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.attendance_recordsDeleteManyArgs>;

export const attendance_recordsDeleteManyZodSchema = z.object({ where: attendance_recordsWhereInputObjectSchema.optional() }).strict();