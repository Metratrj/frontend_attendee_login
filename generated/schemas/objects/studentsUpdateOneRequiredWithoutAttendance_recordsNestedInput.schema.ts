import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsCreateWithoutAttendance_recordsInputObjectSchema as studentsCreateWithoutAttendance_recordsInputObjectSchema } from './studentsCreateWithoutAttendance_recordsInput.schema';
import { studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema as studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema } from './studentsUncheckedCreateWithoutAttendance_recordsInput.schema';
import { studentsCreateOrConnectWithoutAttendance_recordsInputObjectSchema as studentsCreateOrConnectWithoutAttendance_recordsInputObjectSchema } from './studentsCreateOrConnectWithoutAttendance_recordsInput.schema';
import { studentsUpsertWithoutAttendance_recordsInputObjectSchema as studentsUpsertWithoutAttendance_recordsInputObjectSchema } from './studentsUpsertWithoutAttendance_recordsInput.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './studentsWhereUniqueInput.schema';
import { studentsUpdateToOneWithWhereWithoutAttendance_recordsInputObjectSchema as studentsUpdateToOneWithWhereWithoutAttendance_recordsInputObjectSchema } from './studentsUpdateToOneWithWhereWithoutAttendance_recordsInput.schema';
import { studentsUpdateWithoutAttendance_recordsInputObjectSchema as studentsUpdateWithoutAttendance_recordsInputObjectSchema } from './studentsUpdateWithoutAttendance_recordsInput.schema';
import { studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema as studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema } from './studentsUncheckedUpdateWithoutAttendance_recordsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => studentsCreateWithoutAttendance_recordsInputObjectSchema), z.lazy(() => studentsUncheckedCreateWithoutAttendance_recordsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => studentsCreateOrConnectWithoutAttendance_recordsInputObjectSchema).optional(),
  upsert: z.lazy(() => studentsUpsertWithoutAttendance_recordsInputObjectSchema).optional(),
  connect: z.lazy(() => studentsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => studentsUpdateToOneWithWhereWithoutAttendance_recordsInputObjectSchema), z.lazy(() => studentsUpdateWithoutAttendance_recordsInputObjectSchema), z.lazy(() => studentsUncheckedUpdateWithoutAttendance_recordsInputObjectSchema)]).optional()
}).strict();
export const studentsUpdateOneRequiredWithoutAttendance_recordsNestedInputObjectSchema: z.ZodType<Prisma.studentsUpdateOneRequiredWithoutAttendance_recordsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUpdateOneRequiredWithoutAttendance_recordsNestedInput>;
export const studentsUpdateOneRequiredWithoutAttendance_recordsNestedInputObjectZodSchema = makeSchema();
