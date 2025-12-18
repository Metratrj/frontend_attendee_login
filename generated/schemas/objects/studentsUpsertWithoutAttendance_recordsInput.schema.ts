import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsUpdateWithoutAttendance_recordsInputObjectSchema as studentsUpdateWithoutAttendance_recordsInputObjectSchema } from './studentsUpdateWithoutAttendance_recordsInput.schema';
import { studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema as studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema } from './studentsUncheckedUpdateWithoutAttendance_recordsInput.schema';
import { studentsCreateWithoutAttendance_recordsInputObjectSchema as studentsCreateWithoutAttendance_recordsInputObjectSchema } from './studentsCreateWithoutAttendance_recordsInput.schema';
import { studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema as studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema } from './studentsUncheckedCreateWithoutAttendance_recordsInput.schema';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './studentsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => studentsUpdateWithoutAttendance_recordsInputObjectSchema), z.lazy(() => studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema)]),
  create: z.union([z.lazy(() => studentsCreateWithoutAttendance_recordsInputObjectSchema), z.lazy(() => studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema)]),
  where: z.lazy(() => studentsWhereInputObjectSchema).optional()
}).strict();
export const studentsUpsertWithoutAttendance_recordsInputObjectSchema: z.ZodType<Prisma.studentsUpsertWithoutAttendance_recordsInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUpsertWithoutAttendance_recordsInput>;
export const studentsUpsertWithoutAttendance_recordsInputObjectZodSchema = makeSchema();
