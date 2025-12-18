import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './groupsWhereUniqueInput.schema';
import { groupsCreateWithoutStudentsInputObjectSchema as groupsCreateWithoutStudentsInputObjectSchema } from './groupsCreateWithoutStudentsInput.schema';
import { groupsUncheckedCreateWithoutStudentsInputObjectSchema as groupsUncheckedCreateWithoutStudentsInputObjectSchema } from './groupsUncheckedCreateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => groupsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => groupsCreateWithoutStudentsInputObjectSchema), z.lazy(() => groupsUncheckedCreateWithoutStudentsInputObjectSchema)])
}).strict();
export const groupsCreateOrConnectWithoutStudentsInputObjectSchema: z.ZodType<Prisma.groupsCreateOrConnectWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsCreateOrConnectWithoutStudentsInput>;
export const groupsCreateOrConnectWithoutStudentsInputObjectZodSchema = makeSchema();
