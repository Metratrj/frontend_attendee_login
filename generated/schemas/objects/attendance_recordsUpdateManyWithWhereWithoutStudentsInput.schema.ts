import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { attendance_recordsScalarWhereInputObjectSchema as attendance_recordsScalarWhereInputObjectSchema } from './attendance_recordsScalarWhereInput.schema';
import { attendance_recordsUpdateManyMutationInputObjectSchema as attendance_recordsUpdateManyMutationInputObjectSchema } from './attendance_recordsUpdateManyMutationInput.schema';
import { attendance_recordsUncheckedUpdateManyWithoutStudentsInputObjectSchema as attendance_recordsUncheckedUpdateManyWithoutStudentsInputObjectSchema } from './attendance_recordsUncheckedUpdateManyWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendance_recordsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => attendance_recordsUpdateManyMutationInputObjectSchema), z.lazy(() => attendance_recordsUncheckedUpdateManyWithoutStudentsInputObjectSchema)])
}).strict();
export const attendance_recordsUpdateManyWithWhereWithoutStudentsInputObjectSchema: z.ZodType<Prisma.attendance_recordsUpdateManyWithWhereWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsUpdateManyWithWhereWithoutStudentsInput>;
export const attendance_recordsUpdateManyWithWhereWithoutStudentsInputObjectZodSchema = makeSchema();
