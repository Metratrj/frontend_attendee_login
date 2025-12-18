import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsWhereInputObjectSchema as studentsWhereInputObjectSchema } from './studentsWhereInput.schema';
import { studentsUpdateWithoutAttendance_recordsInputObjectSchema as studentsUpdateWithoutAttendance_recordsInputObjectSchema } from './studentsUpdateWithoutAttendance_recordsInput.schema';
import { studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema as studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema } from './studentsUncheckedUpdateWithoutAttendance_recordsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => studentsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => studentsUpdateWithoutAttendance_recordsInputObjectSchema), z.lazy(() => studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema)])
}).strict();
export const studentsUpdateToOneWithWhereWithoutAttendance_recordsInputObjectSchema: z.ZodType<Prisma.studentsUpdateToOneWithWhereWithoutAttendance_recordsInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUpdateToOneWithWhereWithoutAttendance_recordsInput>;
export const studentsUpdateToOneWithWhereWithoutAttendance_recordsInputObjectZodSchema = makeSchema();
