import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsSelectObjectSchema as groupsSelectObjectSchema } from './objects/groupsSelect.schema';
import { groupsIncludeObjectSchema as groupsIncludeObjectSchema } from './objects/groupsInclude.schema';
import { groupsUpdateInputObjectSchema as groupsUpdateInputObjectSchema } from './objects/groupsUpdateInput.schema';
import { groupsUncheckedUpdateInputObjectSchema as groupsUncheckedUpdateInputObjectSchema } from './objects/groupsUncheckedUpdateInput.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './objects/groupsWhereUniqueInput.schema';

export const groupsUpdateOneSchema: z.ZodType<Prisma.groupsUpdateArgs> = z.object({ select: groupsSelectObjectSchema.optional(), include: groupsIncludeObjectSchema.optional(), data: z.union([groupsUpdateInputObjectSchema, groupsUncheckedUpdateInputObjectSchema]), where: groupsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.groupsUpdateArgs>;

export const groupsUpdateOneZodSchema = z.object({ select: groupsSelectObjectSchema.optional(), include: groupsIncludeObjectSchema.optional(), data: z.union([groupsUpdateInputObjectSchema, groupsUncheckedUpdateInputObjectSchema]), where: groupsWhereUniqueInputObjectSchema }).strict();