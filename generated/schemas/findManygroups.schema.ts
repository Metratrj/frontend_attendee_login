import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsIncludeObjectSchema as groupsIncludeObjectSchema } from './objects/groupsInclude.schema';
import { groupsOrderByWithRelationInputObjectSchema as groupsOrderByWithRelationInputObjectSchema } from './objects/groupsOrderByWithRelationInput.schema';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './objects/groupsWhereInput.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './objects/groupsWhereUniqueInput.schema';
import { GroupsScalarFieldEnumSchema } from './enums/GroupsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const groupsFindManySelectSchema: z.ZodType<Prisma.groupsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    students: z.boolean().optional(),
    color: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.groupsSelect>;

export const groupsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    students: z.boolean().optional(),
    color: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const groupsFindManySchema: z.ZodType<Prisma.groupsFindManyArgs> = z.object({ select: groupsFindManySelectSchema.optional(), include: z.lazy(() => groupsIncludeObjectSchema.optional()), orderBy: z.union([groupsOrderByWithRelationInputObjectSchema, groupsOrderByWithRelationInputObjectSchema.array()]).optional(), where: groupsWhereInputObjectSchema.optional(), cursor: groupsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupsScalarFieldEnumSchema, GroupsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.groupsFindManyArgs>;

export const groupsFindManyZodSchema = z.object({ select: groupsFindManySelectSchema.optional(), include: z.lazy(() => groupsIncludeObjectSchema.optional()), orderBy: z.union([groupsOrderByWithRelationInputObjectSchema, groupsOrderByWithRelationInputObjectSchema.array()]).optional(), where: groupsWhereInputObjectSchema.optional(), cursor: groupsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupsScalarFieldEnumSchema, GroupsScalarFieldEnumSchema.array()]).optional() }).strict();