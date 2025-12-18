import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './studentsWhereUniqueInput.schema';
import { studentsCreateWithoutGroupInputObjectSchema as studentsCreateWithoutGroupInputObjectSchema } from './studentsCreateWithoutGroupInput.schema';
import { studentsUncheckedCreateWithoutGroupInputObjectSchema as studentsUncheckedCreateWithoutGroupInputObjectSchema } from './studentsUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => studentsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => studentsCreateWithoutGroupInputObjectSchema), z.lazy(() => studentsUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const studentsCreateOrConnectWithoutGroupInputObjectSchema: z.ZodType<Prisma.studentsCreateOrConnectWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsCreateOrConnectWithoutGroupInput>;
export const studentsCreateOrConnectWithoutGroupInputObjectZodSchema = makeSchema();
