import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './groupsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => groupsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => groupsWhereInputObjectSchema).optional().nullable()
}).strict();
export const GroupsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.GroupsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GroupsNullableScalarRelationFilter>;
export const GroupsNullableScalarRelationFilterObjectZodSchema = makeSchema();
