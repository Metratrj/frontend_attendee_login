import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsUpdateManyMutationInputObjectSchema as groupsUpdateManyMutationInputObjectSchema } from './objects/groupsUpdateManyMutationInput.schema';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './objects/groupsWhereInput.schema';

export const groupsUpdateManySchema: z.ZodType<Prisma.groupsUpdateManyArgs> = z.object({ data: groupsUpdateManyMutationInputObjectSchema, where: groupsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.groupsUpdateManyArgs>;

export const groupsUpdateManyZodSchema = z.object({ data: groupsUpdateManyMutationInputObjectSchema, where: groupsWhereInputObjectSchema.optional() }).strict();