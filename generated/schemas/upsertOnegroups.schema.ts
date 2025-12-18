import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsSelectObjectSchema as groupsSelectObjectSchema } from './objects/groupsSelect.schema';
import { groupsIncludeObjectSchema as groupsIncludeObjectSchema } from './objects/groupsInclude.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './objects/groupsWhereUniqueInput.schema';
import { groupsCreateInputObjectSchema as groupsCreateInputObjectSchema } from './objects/groupsCreateInput.schema';
import { groupsUncheckedCreateInputObjectSchema as groupsUncheckedCreateInputObjectSchema } from './objects/groupsUncheckedCreateInput.schema';
import { groupsUpdateInputObjectSchema as groupsUpdateInputObjectSchema } from './objects/groupsUpdateInput.schema';
import { groupsUncheckedUpdateInputObjectSchema as groupsUncheckedUpdateInputObjectSchema } from './objects/groupsUncheckedUpdateInput.schema';

export const groupsUpsertOneSchema: z.ZodType<Prisma.groupsUpsertArgs> = z.object({ select: groupsSelectObjectSchema.optional(), include: groupsIncludeObjectSchema.optional(), where: groupsWhereUniqueInputObjectSchema, create: z.union([ groupsCreateInputObjectSchema, groupsUncheckedCreateInputObjectSchema ]), update: z.union([ groupsUpdateInputObjectSchema, groupsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.groupsUpsertArgs>;

export const groupsUpsertOneZodSchema = z.object({ select: groupsSelectObjectSchema.optional(), include: groupsIncludeObjectSchema.optional(), where: groupsWhereUniqueInputObjectSchema, create: z.union([ groupsCreateInputObjectSchema, groupsUncheckedCreateInputObjectSchema ]), update: z.union([ groupsUpdateInputObjectSchema, groupsUncheckedUpdateInputObjectSchema ]) }).strict();