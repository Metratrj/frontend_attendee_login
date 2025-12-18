import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsSelectObjectSchema as groupsSelectObjectSchema } from './objects/groupsSelect.schema';
import { groupsIncludeObjectSchema as groupsIncludeObjectSchema } from './objects/groupsInclude.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './objects/groupsWhereUniqueInput.schema';

export const groupsFindUniqueSchema: z.ZodType<Prisma.groupsFindUniqueArgs> = z.object({ select: groupsSelectObjectSchema.optional(), include: groupsIncludeObjectSchema.optional(), where: groupsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.groupsFindUniqueArgs>;

export const groupsFindUniqueZodSchema = z.object({ select: groupsSelectObjectSchema.optional(), include: groupsIncludeObjectSchema.optional(), where: groupsWhereUniqueInputObjectSchema }).strict();