import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsWhereUniqueInputObjectSchema as studentsWhereUniqueInputObjectSchema } from './studentsWhereUniqueInput.schema';
import { studentsUpdateWithoutGroupInputObjectSchema as studentsUpdateWithoutGroupInputObjectSchema } from './studentsUpdateWithoutGroupInput.schema';
import { studentsUncheckedUpdateWithoutGroupInputObjectSchema as studentsUncheckedUpdateWithoutGroupInputObjectSchema } from './studentsUncheckedUpdateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => studentsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => studentsUpdateWithoutGroupInputObjectSchema), z.lazy(() => studentsUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
export const studentsUpdateWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.studentsUpdateWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUpdateWithWhereUniqueWithoutGroupInput>;
export const studentsUpdateWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
