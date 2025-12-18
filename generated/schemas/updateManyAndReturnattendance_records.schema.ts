import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsSelectObjectSchema as attendance_recordsSelectObjectSchema } from './objects/attendance_recordsSelect.schema';
import { attendance_recordsUpdateManyMutationInputObjectSchema as attendance_recordsUpdateManyMutationInputObjectSchema } from './objects/attendance_recordsUpdateManyMutationInput.schema';
import { attendance_recordsWhereInputObjectSchema as attendance_recordsWhereInputObjectSchema } from './objects/attendance_recordsWhereInput.schema';

export const attendance_recordsUpdateManyAndReturnSchema: z.ZodType<Prisma.attendance_recordsUpdateManyAndReturnArgs> = z.object({ select: attendance_recordsSelectObjectSchema.optional(), data: attendance_recordsUpdateManyMutationInputObjectSchema, where: attendance_recordsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.attendance_recordsUpdateManyAndReturnArgs>;

export const attendance_recordsUpdateManyAndReturnZodSchema = z.object({ select: attendance_recordsSelectObjectSchema.optional(), data: attendance_recordsUpdateManyMutationInputObjectSchema, where: attendance_recordsWhereInputObjectSchema.optional() }).strict();