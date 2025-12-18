import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsWhereUniqueInputObjectSchema as attendance_recordsWhereUniqueInputObjectSchema } from './attendance_recordsWhereUniqueInput.schema';
import { attendance_recordsCreateWithoutStudentsInputObjectSchema as attendance_recordsCreateWithoutStudentsInputObjectSchema } from './attendance_recordsCreateWithoutStudentsInput.schema';
import { attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema as attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedCreateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendance_recordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => attendance_recordsCreateWithoutStudentsInputObjectSchema), z.lazy(() => attendance_recordsUncheckedCreateWithoutStudentsInputObjectSchema)])
}).strict();
export const attendance_recordsCreateOrConnectWithoutStudentsInputObjectSchema: z.ZodType<Prisma.attendance_recordsCreateOrConnectWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsCreateOrConnectWithoutStudentsInput>;
export const attendance_recordsCreateOrConnectWithoutStudentsInputObjectZodSchema = makeSchema();
