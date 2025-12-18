import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsSelectObjectSchema as attendance_recordsSelectObjectSchema } from './objects/attendance_recordsSelect.schema';
import { attendance_recordsIncludeObjectSchema as attendance_recordsIncludeObjectSchema } from './objects/attendance_recordsInclude.schema';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './objects/attendance_recordsWhereUniqueInput.schema';
import { attendance_recordsCreateInputObjectSchema as attendance_recordsCreateInputObjectSchema } from './objects/attendance_recordsCreateInput.schema';
import { attendance_recordsUncheckedCreateInputObjectSchema as attendance_recordsUncheckedCreateInputObjectSchema } from './objects/attendance_recordsUncheckedCreateInput.schema';
import { attendance_recordsUpdateInputObjectSchema as attendance_recordsUpdateInputObjectSchema } from './objects/attendance_recordsUpdateInput.schema';
import { attendance_recordsUncheckedUpdateInputObjectSchema as attendance_recordsUncheckedUpdateInputObjectSchema } from './objects/attendance_recordsUncheckedUpdateInput.schema';

export const attendance_recordsUpsertOneSchema: z.ZodType<Prisma.attendance_recordsUpsertArgs> = z.object({ select: attendance_recordsSelectObjectSchema.optional(), include: attendance_recordsIncludeObjectSchema.optional(), where: attendance_recordsWhereUniqueInputObjectSchema, create: z.union([ attendance_recordsCreateInputObjectSchema, attendance_recordsUncheckedCreateInputObjectSchema ]), update: z.union([ attendance_recordsUpdateInputObjectSchema, attendance_recordsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.attendance_recordsUpsertArgs>;

export const attendance_recordsUpsertOneZodSchema = z.object({ select: attendance_recordsSelectObjectSchema.optional(), include: attendance_recordsIncludeObjectSchema.optional(), where: attendance_recordsWhereUniqueInputObjectSchema, create: z.union([ attendance_recordsCreateInputObjectSchema, attendance_recordsUncheckedCreateInputObjectSchema ]), update: z.union([ attendance_recordsUpdateInputObjectSchema, attendance_recordsUncheckedUpdateInputObjectSchema ]) }).strict();