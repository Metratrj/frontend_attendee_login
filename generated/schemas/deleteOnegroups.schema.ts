import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsSelectObjectSchema as groupsSelectObjectSchema } from './objects/groupsSelect.schema';
import { groupsIncludeObjectSchema as groupsIncludeObjectSchema } from './objects/groupsInclude.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './objects/groupsWhereUniqueInput.schema';

export const groupsDeleteOneSchema: z.ZodType<Prisma.groupsDeleteArgs> = z.object({ select: groupsSelectObjectSchema.optional(), include: groupsIncludeObjectSchema.optional(), where: groupsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.groupsDeleteArgs>;

export const groupsDeleteOneZodSchema = z.object({ select: groupsSelectObjectSchema.optional(), include: groupsIncludeObjectSchema.optional(), where: groupsWhereUniqueInputObjectSchema }).strict();