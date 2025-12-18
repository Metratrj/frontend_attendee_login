import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './groupsWhereInput.schema';
import { groupsUpdateWithoutStudentsInputObjectSchema as groupsUpdateWithoutStudentsInputObjectSchema } from './groupsUpdateWithoutStudentsInput.schema';
import { groupsUncheckedUpdateWithoutStudentsInputObjectSchema as groupsUncheckedUpdateWithoutStudentsInputObjectSchema } from './groupsUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => groupsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => groupsUpdateWithoutStudentsInputObjectSchema), z.lazy(() => groupsUncheckedUpdateWithoutStudentsInputObjectSchema)])
}).strict();
export const groupsUpdateToOneWithWhereWithoutStudentsInputObjectSchema: z.ZodType<Prisma.groupsUpdateToOneWithWhereWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsUpdateToOneWithWhereWithoutStudentsInput>;
export const groupsUpdateToOneWithWhereWithoutStudentsInputObjectZodSchema = makeSchema();
