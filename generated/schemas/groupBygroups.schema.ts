import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './objects/groupsWhereInput.schema';
import { groupsOrderByWithAggregationInputObjectSchema as groupsOrderByWithAggregationInputObjectSchema } from './objects/groupsOrderByWithAggregationInput.schema';
import { groupsScalarWhereWithAggregatesInputObjectSchema as groupsScalarWhereWithAggregatesInputObjectSchema } from './objects/groupsScalarWhereWithAggregatesInput.schema';
import { GroupsScalarFieldEnumSchema } from './enums/GroupsScalarFieldEnum.schema';
import { GroupsCountAggregateInputObjectSchema as GroupsCountAggregateInputObjectSchema } from './objects/GroupsCountAggregateInput.schema';
import { GroupsMinAggregateInputObjectSchema as GroupsMinAggregateInputObjectSchema } from './objects/GroupsMinAggregateInput.schema';
import { GroupsMaxAggregateInputObjectSchema as GroupsMaxAggregateInputObjectSchema } from './objects/GroupsMaxAggregateInput.schema';

export const groupsGroupBySchema: z.ZodType<Prisma.groupsGroupByArgs> = z.object({ where: groupsWhereInputObjectSchema.optional(), orderBy: z.union([groupsOrderByWithAggregationInputObjectSchema, groupsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: groupsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GroupsScalarFieldEnumSchema), _count: z.union([ z.literal(true), GroupsCountAggregateInputObjectSchema ]).optional(), _min: GroupsMinAggregateInputObjectSchema.optional(), _max: GroupsMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.groupsGroupByArgs>;

export const groupsGroupByZodSchema = z.object({ where: groupsWhereInputObjectSchema.optional(), orderBy: z.union([groupsOrderByWithAggregationInputObjectSchema, groupsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: groupsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GroupsScalarFieldEnumSchema), _count: z.union([ z.literal(true), GroupsCountAggregateInputObjectSchema ]).optional(), _min: GroupsMinAggregateInputObjectSchema.optional(), _max: GroupsMaxAggregateInputObjectSchema.optional() }).strict();