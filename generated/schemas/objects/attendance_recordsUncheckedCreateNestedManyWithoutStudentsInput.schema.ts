import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsCreateWithoutStudentsInputObjectSchema as attendance_recordsCreateWithoutStudentsInputObjectSchema } from './attendance_recordsCreateWithoutStudentsInput.schema';
import { attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema as attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedCreateWithoutStudentsInput.schema';
import { attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema as attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema } from './attendance_recordsCreateOrConnectWithoutStudentsInput.schema';
import { attendance_recordsCreateManyStudentsInputEnvelopeObjectSchema as attendance_recordsCreateManyStudentsInputEnvelopeObjectSchema } from './attendance_recordsCreateManyStudentsInputEnvelope.schema';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './attendance_recordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendance_recordsCreateWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsCreateWithoutStudentsInputObjectSchema).array(), z.lazy(() => attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendance_recordsCreateManyStudentsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema), z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const attendance_recordsUncheckedCreateNestedManyWithoutStudentsInputObjectSchema: z.ZodType<Prisma.attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsUncheckedCreateNestedManyWithoutStudentsInput>;
export const attendance_recordsUncheckedCreateNestedManyWithoutStudentsInputObjectZodSchema = makeSchema();
