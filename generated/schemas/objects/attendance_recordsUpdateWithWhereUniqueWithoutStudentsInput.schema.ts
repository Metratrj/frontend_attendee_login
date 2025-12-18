import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './attendance_recordsWhereUniqueInput.schema';
import { attendance_recordsUpdateWithoutStudentsInputObjectSchema as attendance_recordsUpdateWithoutStudentsInputObjectSchema } from './attendance_recordsUpdateWithoutStudentsInput.schema';
import { attendance_recordsUncheckedUpdateWithoutStudentsInputObjectSchema as attendance_recordsUncheckedUpdateWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => attendance_recordsUpdateWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUncheckedUpdateWithoutStudentsInputObjectSchema)])
}).strict();
export const attendance_recordsUpdateWithWhereUniqueWithoutStudentsInputObjectSchema: z.ZodType<Prisma.attendance_recordsUpdateWithWhereUniqueWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsUpdateWithWhereUniqueWithoutStudentsInput>;
export const attendance_recordsUpdateWithWhereUniqueWithoutStudentsInputObjectZodSchema = makeSchema();
