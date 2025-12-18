import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsSelectObjectSchema as groupsSelectObjectSchema } from './objects/groupsSelect.schema';
import { groupsCreateManyInputObjectSchema as groupsCreateManyInputObjectSchema } from './objects/groupsCreateManyInput.schema';

export const groupsCreateManyAndReturnSchema: z.ZodType<Prisma.groupsCreateManyAndReturnArgs> = z.object({ select: groupsSelectObjectSchema.optional(), data: z.union([ groupsCreateManyInputObjectSchema, z.array(groupsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.groupsCreateManyAndReturnArgs>;

export const groupsCreateManyAndReturnZodSchema = z.object({ select: groupsSelectObjectSchema.optional(), data: z.union([ groupsCreateManyInputObjectSchema, z.array(groupsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();