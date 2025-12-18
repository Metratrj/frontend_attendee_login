import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsOrderByWithRelationInputObjectSchema as groupsOrderByWithRelationInputObjectSchema } from './objects/groupsOrderByWithRelationInput.schema';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './objects/groupsWhereInput.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './objects/groupsWhereUniqueInput.schema';
import { GroupsCountAggregateInputObjectSchema as GroupsCountAggregateInputObjectSchema } from './objects/GroupsCountAggregateInput.schema';

export const groupsCountSchema: z.ZodType<Prisma.groupsCountArgs> = z.object({ orderBy: z.union([groupsOrderByWithRelationInputObjectSchema, groupsOrderByWithRelationInputObjectSchema.array()]).optional(), where: groupsWhereInputObjectSchema.optional(), cursor: groupsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GroupsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.groupsCountArgs>;

export const groupsCountZodSchema = z.object({ orderBy: z.union([groupsOrderByWithRelationInputObjectSchema, groupsOrderByWithRelationInputObjectSchema.array()]).optional(), where: groupsWhereInputObjectSchema.optional(), cursor: groupsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GroupsCountAggregateInputObjectSchema ]).optional() }).strict();