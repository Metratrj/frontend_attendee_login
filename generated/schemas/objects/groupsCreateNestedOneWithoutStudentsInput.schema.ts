import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { groupsCreateWithoutStudentsInputObjectSchema as groupsCreateWithoutStudentsInputObjectSchema } from './groupsCreateWithoutStudentsInput.schema';
import { groupsUncheckedCreateWithoutStudentsInputObjectSchema as groupsUncheckedCreateWithoutStudentsInputObjectSchema } from './groupsUncheckedCreateWithoutStudentsInput.schema';
import { groupsCreateOrConnectWithoutStudentsInputObjectSchema as groupsCreateOrConnectWithoutStudentsInputObjectSchema } from './groupsCreateOrConnectWithoutStudentsInput.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './groupsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => groupsCreateWithoutStudentsInputObjectSchema), z.lazy(() => groupsUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => groupsCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  connect: z.lazy(() => groupsWhereUniqueInputObjectSchema).optional()
}).strict();
export const groupsCreateNestedOneWithoutStudentsInputObjectSchema: z.ZodType<Prisma.groupsCreateNestedOneWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsCreateNestedOneWithoutStudentsInput>;
export const groupsCreateNestedOneWithoutStudentsInputObjectZodSchema = makeSchema();
