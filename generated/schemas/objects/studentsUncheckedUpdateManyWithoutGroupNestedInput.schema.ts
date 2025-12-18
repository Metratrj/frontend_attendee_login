import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsCreateWithoutGroupInputObjectSchema as studentsCreateWithoutGroupInputObjectSchema } from './studentsCreateWithoutGroupInput.schema';
import { studentsUncheckedCreateWithoutGroupInputObjectSchema as studentsUncheckedCreateWithoutGroupInputObjectSchema } from './studentsUncheckedCreateWithoutGroupInput.schema';
import { studentsCreateOrConnectWithoutGroupInputObjectSchema as studentsCreateOrConnectWithoutGroupInputObjectSchema } from './studentsCreateOrConnectWithoutGroupInput.schema';
import { studentsUpsertWithWhereUniqueWithoutGroupInputObjectSchema as studentsUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './studentsUpsertWithWhereUniqueWithoutGroupInput.schema';
import { studentsCreateManyGroupInputEnvelopeObjectSchema as studentsCreateManyGroupInputEnvelopeObjectSchema } from './studentsCreateManyGroupInputEnvelope.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './studentsWhereUniqueInput.schema';
import { studentsUpdateWithWhereUniqueWithoutGroupInputObjectSchema as studentsUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './studentsUpdateWithWhereUniqueWithoutGroupInput.schema';
import { studentsUpdateManyWithWhereWithoutGroupInputObjectSchema as studentsUpdateManyWithWhereWithoutGroupInputObjectSchema } from './studentsUpdateManyWithWhereWithoutGroupInput.schema';
import { studentsScalarWhereInputObjectSchema as studentsScalarWhereInputObjectSchema } from './studentsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => studentsCreateWithoutGroupInputObjectSchema), z.lazy(() => studentsCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => studentsUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => studentsUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => studentsCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => studentsCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => studentsUpsertWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => studentsUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => studentsCreateManyGroupInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => studentsWhereUniqueInputObjectSchema), z.lazy(() => studentsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => studentsWhereUniqueInputObjectSchema), z.lazy(() => studentsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => studentsWhereUniqueInputObjectSchema), z.lazy(() => studentsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => studentsWhereUniqueInputObjectSchema), z.lazy(() => studentsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => studentsUpdateWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => studentsUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => studentsUpdateManyWithWhereWithoutGroupInputObjectSchema), z.lazy(() => studentsUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => studentsScalarWhereInputObjectSchema), z.lazy(() => studentsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const studentsUncheckedUpdateManyWithoutGroupNestedInputObjectSchema: z.ZodType<Prisma.studentsUncheckedUpdateManyWithoutGroupNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUncheckedUpdateManyWithoutGroupNestedInput>;
export const studentsUncheckedUpdateManyWithoutGroupNestedInputObjectZodSchema = makeSchema();
