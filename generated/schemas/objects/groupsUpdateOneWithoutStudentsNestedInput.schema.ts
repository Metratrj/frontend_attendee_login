import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { groupsCreateWithoutStudentsInputObjectSchema as groupsCreateWithoutStudentsInputObjectSchema } from './groupsCreateWithoutStudentsInput.schema';
import { groupsUncheckedCreateWithoutStudentsInputObjectSchema as groupsUncheckedCreateWithoutStudentsInputObjectSchema } from './groupsUncheckedCreateWithoutStudentsInput.schema';
import { groupsCreateOrConnectWithoutStudentsInputObjectSchema as groupsCreateOrConnectWithoutStudentsInputObjectSchema } from './groupsCreateOrConnectWithoutStudentsInput.schema';
import { groupsUpsertWithoutStudentsInputObjectSchema as groupsUpsertWithoutStudentsInputObjectSchema } from './groupsUpsertWithoutStudentsInput.schema';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './groupsWhereInput.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './groupsWhereUniqueInput.schema';
import { groupsUpdateToOneWithWhereWithoutStudentsInputObjectSchema as groupsUpdateToOneWithWhereWithoutStudentsInputObjectSchema } from './groupsUpdateToOneWithWhereWithoutStudentsInput.schema';
import { groupsUpdateWithoutStudentsInputObjectSchema as groupsUpdateWithoutStudentsInputObjectSchema } from './groupsUpdateWithoutStudentsInput.schema';
import { groupsUncheckedUpdateWithoutStudentsInputObjectSchema as groupsUncheckedUpdateWithoutStudentsInputObjectSchema } from './groupsUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => groupsCreateWithoutStudentsInputObjectSchema), z.lazy(() => groupsUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => groupsCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  upsert: z.lazy(() => groupsUpsertWithoutStudentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => groupsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => groupsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => groupsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => groupsUpdateToOneWithWhereWithoutStudentsInputObjectSchema), z.lazy(() => groupsUpdateWithoutStudentsInputObjectSchema), z.lazy(() => groupsUncheckedUpdateWithoutStudentsInputObjectSchema)]).optional()
}).strict();
export const groupsUpdateOneWithoutStudentsNestedInputObjectSchema: z.ZodType<Prisma.groupsUpdateOneWithoutStudentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsUpdateOneWithoutStudentsNestedInput>;
export const groupsUpdateOneWithoutStudentsNestedInputObjectZodSchema = makeSchema();
