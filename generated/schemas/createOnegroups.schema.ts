import type {Prisma} from '../prisma/client';
import * as z from 'zod';
import {groupsSelectObjectSchema as groupsSelectObjectSchema} from './objects/groupsSelect.schema';
import {groupsIncludeObjectSchema as groupsIncludeObjectSchema} from './objects/groupsInclude.schema';
import {groupsCreateInputObjectSchema as groupsCreateInputObjectSchema} from './objects/groupsCreateInput.schema';
import {
    groupsUncheckedCreateInputObjectSchema as groupsUncheckedCreateInputObjectSchema
} from './objects/groupsUncheckedCreateInput.schema';

export const groupsCreateOneSchema: z.ZodType<Prisma.groupsCreateArgs> = z.object({
    select: groupsSelectObjectSchema.optional(),
    include: groupsIncludeObjectSchema.optional(),
    data: z.union([groupsCreateInputObjectSchema, groupsUncheckedCreateInputObjectSchema])
}).strict() as unknown as z.ZodType<Prisma.groupsCreateArgs>;

export const groupsCreateOneZodSchema = z.object({
    select: groupsSelectObjectSchema.optional(),
    include: groupsIncludeObjectSchema.optional(),
    data: z.union([groupsCreateInputObjectSchema, groupsUncheckedCreateInputObjectSchema])
}).strict();