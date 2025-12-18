import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsUpdateManyMutationInputObjectSchema as attendance_recordsUpdateManyMutationInputObjectSchema } from './objects/attendance_recordsUpdateManyMutationInput.schema';
import { attendance_recordsWhereInputObjectSchema as attendance_recordsWhereInputObjectSchema } from './objects/attendance_recordsWhereInput.schema';

export const attendance_recordsUpdateManySchema: z.ZodType<Prisma.attendance_recordsUpdateManyArgs> = z.object({ data: attendance_recordsUpdateManyMutationInputObjectSchema, where: attendance_recordsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.attendance_recordsUpdateManyArgs>;

export const attendance_recordsUpdateManyZodSchema = z.object({ data: attendance_recordsUpdateManyMutationInputObjectSchema, where: attendance_recordsWhereInputObjectSchema.optional() }).strict();