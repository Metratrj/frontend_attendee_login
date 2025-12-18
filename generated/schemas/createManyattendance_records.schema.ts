import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { attendance_recordsCreateManyInputObjectSchema as attendance_recordsCreateManyInputObjectSchema } from './objects/attendance_recordsCreateManyInput.schema';

export const attendance_recordsCreateManySchema: z.ZodType<Prisma.attendance_recordsCreateManyArgs> = z.object({ data: z.union([ attendance_recordsCreateManyInputObjectSchema, z.array(attendance_recordsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.attendance_recordsCreateManyArgs>;

export const attendance_recordsCreateManyZodSchema = z.object({ data: z.union([ attendance_recordsCreateManyInputObjectSchema, z.array(attendance_recordsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();