import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsScalarWhereInputObjectSchema as studentsScalarWhereInputObjectSchema } from './studentsScalarWhereInput.schema';
import { studentsUpdateManyMutationInputObjectSchema as studentsUpdateManyMutationInputObjectSchema } from './studentsUpdateManyMutationInput.schema';
import { studentsUncheckedUpdateManyWithoutGroupInputObjectSchema as studentsUncheckedUpdateManyWithoutGroupInputObjectSchema } from './studentsUncheckedUpdateManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => studentsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => studentsUpdateManyMutationInputObjectSchema), z.lazy(() => studentsUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
export const studentsUpdateManyWithWhereWithoutGroupInputObjectSchema: z.ZodType<Prisma.studentsUpdateManyWithWhereWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsUpdateManyWithWhereWithoutGroupInput>;
export const studentsUpdateManyWithWhereWithoutGroupInputObjectZodSchema = makeSchema();
