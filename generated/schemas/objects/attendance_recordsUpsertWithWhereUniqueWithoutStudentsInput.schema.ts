import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './attendance_recordsWhereUniqueInput.schema';
import { attendance_recordsUpdateWithoutStudentsInputObjectSchema as attendance_recordsUpdateWithoutStudentsInputObjectSchema } from './attendance_recordsUpdateWithoutStudentsInput.schema';
import { attendance_recordsUncheckedUpdateWithoutStudentsInputObjectSchema as attendance_recordsUncheckedUpdateWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedUpdateWithoutStudentsInput.schema';
import { attendance_recordsCreateWithoutStudentsInputObjectSchema as attendance_recordsCreateWithoutStudentsInputObjectSchema } from './attendance_recordsCreateWithoutStudentsInput.schema';
import { attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema as attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedCreateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => attendance_recordsUpdateWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUncheckedUpdateWithoutStudentsInputObjectSchema)]),
  create: z.union([z.lazy(() => attendance_recordsCreateWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema)])
}).strict();
export const attendance_recordsUpsertWithWhereUniqueWithoutStudentsInputObjectSchema: z.ZodType<Prisma.attendance_recordsUpsertWithWhereUniqueWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsUpsertWithWhereUniqueWithoutStudentsInput>;
export const attendance_recordsUpsertWithWhereUniqueWithoutStudentsInputObjectZodSchema = makeSchema();
