import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsCreateWithoutGroupInputObjectSchema as studentsCreateWithoutGroupInputObjectSchema } from './studentsCreateWithoutGroupInput.schema';
import { studentsUncheckedCreateWithoutGroupInputObjectSchema as studentsUncheckedCreateWithoutGroupInputObjectSchema } from './studentsUncheckedCreateWithoutGroupInput.schema';
import { studentsCreateOrConnectWithoutGroupInputObjectSchema as studentsCreateOrConnectWithoutGroupInputObjectSchema } from './studentsCreateOrConnectWithoutGroupInput.schema';
import { studentsCreateManyGroupInputEnvelopeObjectSchema as studentsCreateManyGroupInputEnvelopeObjectSchema } from './studentsCreateManyGroupInputEnvelope.schema';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './studentsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => studentsCreateWithoutGroupInputObjectSchema), z.lazy(() => studentsCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => studentsUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => studentsUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => studentsCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => studentsCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => studentsCreateManyGroupInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => studentsWhereUniqueInputObjectSchema), z.lazy(() => studentsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const studentsUncheckedCreateNestedManyWithoutGroupInputObjectSchema: z.ZodType<Prisma.studentsUncheckedCreateNestedManyWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUncheckedCreateNestedManyWithoutGroupInput>;
export const studentsUncheckedCreateNestedManyWithoutGroupInputObjectZodSchema = makeSchema();
