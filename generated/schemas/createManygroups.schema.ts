import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsCreateManyInputObjectSchema as groupsCreateManyInputObjectSchema } from './objects/groupsCreateManyInput.schema';

export const groupsCreateManySchema: z.ZodType<Prisma.groupsCreateManyArgs> = z.object({ data: z.union([ groupsCreateManyInputObjectSchema, z.array(groupsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.groupsCreateManyArgs>;

export const groupsCreateManyZodSchema = z.object({ data: z.union([ groupsCreateManyInputObjectSchema, z.array(groupsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();