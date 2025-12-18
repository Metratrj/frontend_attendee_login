import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { groupsWhereInputObjectSchema as groupsWhereInputObjectSchema } from './objects/groupsWhereInput.schema';

export const groupsDeleteManySchema: z.ZodType<Prisma.groupsDeleteManyArgs> = z.object({ where: groupsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.groupsDeleteManyArgs>;

export const groupsDeleteManyZodSchema = z.object({ where: groupsWhereInputObjectSchema.optional() }).strict();