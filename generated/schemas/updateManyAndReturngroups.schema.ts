import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsSelectObjectSchema as groupsSelectObjectSchema } from './objects/groupsSelect.schema';
import { groupsUpdateManyMutationInputObjectSchema as groupsUpdateManyMutationInputObjectSchema } from './objects/groupsUpdateManyMutationInput.schema';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './objects/groupsWhereInput.schema';

export const groupsUpdateManyAndReturnSchema: z.ZodType<Prisma.groupsUpdateManyAndReturnArgs> = z.object({ select: groupsSelectObjectSchema.optional(), data: groupsUpdateManyMutationInputObjectSchema, where: groupsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.groupsUpdateManyAndReturnArgs>;

export const groupsUpdateManyAndReturnZodSchema = z.object({ select: groupsSelectObjectSchema.optional(), data: groupsUpdateManyMutationInputObjectSchema, where: groupsWhereInputObjectSchema.optional() }).strict();