import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsSelectObjectSchema as attendance_recordsSelectObjectSchema } from './objects/attendance_recordsSelect.schema';
import { attendance_recordsCreateManyInputObjectSchema as attendance_recordsCreateManyInputObjectSchema } from './objects/attendance_recordsCreateManyInput.schema';

export const attendance_recordsCreateManyAndReturnSchema: z.ZodType<Prisma.attendance_recordsCreateManyAndReturnArgs> = z.object({ select: attendance_recordsSelectObjectSchema.optional(), data: z.union([ attendance_recordsCreateManyInputObjectSchema, z.array(attendance_recordsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.attendance_recordsCreateManyAndReturnArgs>;

export const attendance_recordsCreateManyAndReturnZodSchema = z.object({ select: attendance_recordsSelectObjectSchema.optional(), data: z.union([ attendance_recordsCreateManyInputObjectSchema, z.array(attendance_recordsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();