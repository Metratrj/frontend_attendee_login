import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { userOrderByWithRelationInputObjectSchema as userOrderByWithRelationInputObjectSchema } from './objects/userOrderByWithRelationInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './objects/userWhereInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './objects/userWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const userFindFirstOrThrowSelectSchema: z.ZodType<Prisma.userSelect> = z.object({
    id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    firstname: z.boolean().optional(),
    lastname: z.boolean().optional(),
    username: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.userSelect>;

export const userFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    firstname: z.boolean().optional(),
    lastname: z.boolean().optional(),
    username: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional()
  }).strict();

export const userFindFirstOrThrowSchema: z.ZodType<Prisma.userFindFirstOrThrowArgs> = z.object({ select: userFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([userOrderByWithRelationInputObjectSchema, userOrderByWithRelationInputObjectSchema.array()]).optional(), where: userWhereInputObjectSchema.optional(), cursor: userWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.userFindFirstOrThrowArgs>;

export const userFindFirstOrThrowZodSchema = z.object({ select: userFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([userOrderByWithRelationInputObjectSchema, userOrderByWithRelationInputObjectSchema.array()]).optional(), where: userWhereInputObjectSchema.optional(), cursor: userWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();