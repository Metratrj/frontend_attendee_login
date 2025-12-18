import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsOrderByWithRelationInputObjectSchema as groupsOrderByWithRelationInputObjectSchema } from './objects/groupsOrderByWithRelationInput.schema';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './objects/groupsWhereInput.schema';
import { groupsWhereUniqueInputObjectSchema as groupsWhereUniqueInputObjectSchema } from './objects/groupsWhereUniqueInput.schema';
import { GroupsCountAggregateInputObjectSchema as GroupsCountAggregateInputObjectSchema } from './objects/GroupsCountAggregateInput.schema';
import { GroupsMinAggregateInputObjectSchema as GroupsMinAggregateInputObjectSchema } from './objects/GroupsMinAggregateInput.schema';
import { GroupsMaxAggregateInputObjectSchema as GroupsMaxAggregateInputObjectSchema } from './objects/GroupsMaxAggregateInput.schema';

export const groupsAggregateSchema: z.ZodType<Prisma.groupsAggregateArgs> = z.object({ orderBy: z.union([groupsOrderByWithRelationInputObjectSchema, groupsOrderByWithRelationInputObjectSchema.array()]).optional(), where: groupsWhereInputObjectSchema.optional(), cursor: groupsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GroupsCountAggregateInputObjectSchema ]).optional(), _min: GroupsMinAggregateInputObjectSchema.optional(), _max: GroupsMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.groupsAggregateArgs>;

export const groupsAggregateZodSchema = z.object({ orderBy: z.union([groupsOrderByWithRelationInputObjectSchema, groupsOrderByWithRelationInputObjectSchema.array()]).optional(), where: groupsWhereInputObjectSchema.optional(), cursor: groupsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GroupsCountAggregateInputObjectSchema ]).optional(), _min: GroupsMinAggregateInputObjectSchema.optional(), _max: GroupsMaxAggregateInputObjectSchema.optional() }).strict();