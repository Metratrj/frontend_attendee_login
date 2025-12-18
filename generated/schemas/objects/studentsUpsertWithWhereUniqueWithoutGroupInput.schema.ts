import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './studentsWhereUniqueInput.schema';
import { studentsUpdateWithoutGroupInputObjectSchema as studentsUpdateWithoutGroupInputObjectSchema } from './studentsUpdateWithoutGroupInput.schema';
import { studentsUncheckedUpdateWithoutGroupInputObjectSchema as studentsUncheckedUpdateWithoutGroupInputObjectSchema } from './studentsUncheckedUpdateWithoutGroupInput.schema';
import { studentsCreateWithoutGroupInputObjectSchema as studentsCreateWithoutGroupInputObjectSchema } from './studentsCreateWithoutGroupInput.schema';
import { studentsUncheckedCreateWithoutGroupInputObjectSchema as studentsUncheckedCreateWithoutGroupInputObjectSchema } from './studentsUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => studentsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => studentsUpdateWithoutGroupInputObjectSchema), z.lazy(() => studentsUncheckedUpdateWithoutGroupInputObjectSchema)]),
  create: z.union([z.lazy(() => studentsCreateWithoutGroupInputObjectSchema), z.lazy(() => studentsUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const studentsUpsertWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.studentsUpsertWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUpsertWithWhereUniqueWithoutGroupInput>;
export const studentsUpsertWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
