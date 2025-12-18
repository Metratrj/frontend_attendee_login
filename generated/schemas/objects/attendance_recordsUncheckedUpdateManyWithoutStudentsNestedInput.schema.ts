import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsCreateWithoutStudentsInputObjectSchema as attendance_recordsCreateWithoutStudentsInputObjectSchema } from './attendance_recordsCreateWithoutStudentsInput.schema';
import { attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema as attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedCreateWithoutStudentsInput.schema';
import { attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema as attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema } from './attendance_recordsCreateOrConnectWithoutStudentsInput.schema';
import { attendance_recordsUpsertWithWhereUniqueWithoutStudentsInputObjectSchema as attendance_recordsUpsertWithWhereUniqueWithoutStudentsInputObjectSchema } from './attendance_recordsUpsertWithWhereUniqueWithoutStudentsInput.schema';
import { attendance_recordsCreateManyStudentsInputEnvelopeObjectSchema as attendance_recordsCreateManyStudentsInputEnvelopeObjectSchema } from './attendance_recordsCreateManyStudentsInputEnvelope.schema';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './attendance_recordsWhereUniqueInput.schema';
import { attendance_recordsUpdateWithWhereUniqueWithoutStudentsInputObjectSchema as attendance_recordsUpdateWithWhereUniqueWithoutStudentsInputObjectSchema } from './attendance_recordsUpdateWithWhereUniqueWithoutStudentsInput.schema';
import { attendance_recordsUpdateManyWithWhereWithoutStudentsInputObjectSchema as attendance_recordsUpdateManyWithWhereWithoutStudentsInputObjectSchema } from './attendance_recordsUpdateManyWithWhereWithoutStudentsInput.schema';
import { attendance_recordsScalarWhereInputObjectSchema as attendance_recordsScalarWhereInputObjectSchema } from './attendance_recordsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendance_recordsCreateWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsCreateWithoutStudentsInputObjectSchema).array(), z.lazy(() => attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => attendance_recordsUpsertWithWhereUniqueWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUpsertWithWhereUniqueWithoutStudentsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendance_recordsCreateManyStudentsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema), z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema), z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema), z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema), z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => attendance_recordsUpdateWithWhereUniqueWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUpdateWithWhereUniqueWithoutStudentsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => attendance_recordsUpdateManyWithWhereWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUpdateManyWithWhereWithoutStudentsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => attendance_recordsScalarWhereInputObjectSchema), z.lazy(() => attendance_recordsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInputObjectSchema: z.ZodType<Prisma.attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInput>;
export const attendance_recordsUncheckedUpdateManyWithoutStudentsNestedInputObjectZodSchema = makeSchema();
