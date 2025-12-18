import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './studentsWhereUniqueInput.schema';
import { studentsCreateWithoutAttendance_recordsInputObjectSchema as studentsCreateWithoutAttendance_recordsInputObjectSchema } from './studentsCreateWithoutAttendance_recordsInput.schema';
import { studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema as studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema } from './studentsUncheckedCreateWithoutAttendance_recordsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => studentsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => studentsCreateWithoutAttendance_recordsInputObjectSchema), z.lazy(() => studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema)])
}).strict();
export const studentsCreateOrConnectWithoutAttendance_recordsInputObjectSchema: z.ZodType<Prisma.studentsCreateOrConnectWithoutAttendance_recordsInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsCreateOrConnectWithoutAttendance_recordsInput>;
export const studentsCreateOrConnectWithoutAttendance_recordsInputObjectZodSchema = makeSchema();
