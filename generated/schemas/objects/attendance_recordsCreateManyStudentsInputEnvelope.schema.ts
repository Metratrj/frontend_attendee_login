import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsCreateManyStudentsInputObjectSchema as attendance_recordsCreateManyStudentsInputObjectSchema } from './attendance_recordsCreateManyStudentsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => attendance_recordsCreateManyStudentsInputObjectSchema), z.lazy(() => attendance_recordsCreateManyStudentsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const attendance_recordsCreateManyStudentsInputEnvelopeObjectSchema: z.ZodType<Prisma.attendance_recordsCreateManyStudentsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsCreateManyStudentsInputEnvelope>;
export const attendance_recordsCreateManyStudentsInputEnvelopeObjectZodSchema = makeSchema();
