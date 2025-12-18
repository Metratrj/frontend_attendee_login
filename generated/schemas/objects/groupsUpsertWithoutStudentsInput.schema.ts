import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { groupsUpdateWithoutStudentsInputObjectSchema as groupsUpdateWithoutStudentsInputObjectSchema } from './groupsUpdateWithoutStudentsInput.schema';
import { groupsUncheckedUpdateWithoutStudentsInputObjectSchema as groupsUncheckedUpdateWithoutStudentsInputObjectSchema } from './groupsUncheckedUpdateWithoutStudentsInput.schema';
import { groupsCreateWithoutStudentsInputObjectSchema as groupsCreateWithoutStudentsInputObjectSchema } from './groupsCreateWithoutStudentsInput.schema';
import { groupsUncheckedCreateWithoutStudentsInputObjectSchema as groupsUncheckedCreateWithoutStudentsInputObjectSchema } from './groupsUncheckedCreateWithoutStudentsInput.schema';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './groupsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => groupsUpdateWithoutStudentsInputObjectSchema), z.lazy(() => groupsUncheckedUpdateWithoutStudentsInputObjectSchema)]),
  create: z.union([z.lazy(() => groupsCreateWithoutStudentsInputObjectSchema), z.lazy(() => groupsUncheckedCreateWithoutStudentsInputObjectSchema)]),
  where: z.lazy(() => groupsWhereInputObjectSchema).optional()
}).strict();
export const groupsUpsertWithoutStudentsInputObjectSchema: z.ZodType<Prisma.groupsUpsertWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsUpsertWithoutStudentsInput>;
export const groupsUpsertWithoutStudentsInputObjectZodSchema = makeSchema();
