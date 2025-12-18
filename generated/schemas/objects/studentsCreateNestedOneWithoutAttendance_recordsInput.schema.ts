import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsCreateWithoutAttendance_recordsInputObjectSchema as studentsCreateWithoutAttendance_recordsInputObjectSchema } from './studentsCreateWithoutAttendance_recordsInput.schema';
import { studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema as studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema } from './studentsUncheckedCreateWithoutAttendance_recordsInput.schema';
import { studentsCreateOrConnectWithoutAttendance_recordsInputObjectSchema as studentsCreateOrConnectWithoutAttendance_recordsInputObjectSchema } from './studentsCreateOrConnectWithoutAttendance_recordsInput.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './studentsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => studentsCreateWithoutAttendance_recordsInputObjectSchema), z.lazy(() => studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => studentsCreateOrConnectWithoutAttendance_recordsInputObjectSchema).optional(),
  connect: z.lazy(() => studentsWhereUniqueInputObjectSchema).optional()
}).strict();
export const studentsCreateNestedOneWithoutAttendance_recordsInputObjectSchema: z.ZodType<Prisma.studentsCreateNestedOneWithoutAttendance_recordsInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsCreateNestedOneWithoutAttendance_recordsInput>;
export const studentsCreateNestedOneWithoutAttendance_recordsInputObjectZodSchema = makeSchema();
