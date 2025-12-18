import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsOrderByWithRelationInputObjectSchema as daily_configurationsOrderByWithRelationInputObjectSchema } from './objects/daily_configurationsOrderByWithRelationInput.schema';
import { daily_configurationsWhereInputObjectSchema as daily_configurationsWhereInputObjectSchema } from './objects/daily_configurationsWhereInput.schema';
import { daily_configurationsWhereUniqueInputObjectSchema as daily_configurationsWhereUniqueInputObjectSchema } from './objects/daily_configurationsWhereUniqueInput.schema';
import { DailyConfigurationsScalarFieldEnumSchema } from './enums/DailyConfigurationsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const daily_configurationsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.daily_configurationsSelect> = z.object({
    date: z.boolean().optional(),
    late_cutoff_time: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.daily_configurationsSelect>;

export const daily_configurationsFindFirstOrThrowSelectZodSchema = z.object({
    date: z.boolean().optional(),
    late_cutoff_time: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const daily_configurationsFindFirstOrThrowSchema: z.ZodType<Prisma.daily_configurationsFindFirstOrThrowArgs> = z.object({ select: daily_configurationsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([daily_configurationsOrderByWithRelationInputObjectSchema, daily_configurationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: daily_configurationsWhereInputObjectSchema.optional(), cursor: daily_configurationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DailyConfigurationsScalarFieldEnumSchema, DailyConfigurationsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.daily_configurationsFindFirstOrThrowArgs>;

export const daily_configurationsFindFirstOrThrowZodSchema = z.object({ select: daily_configurationsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([daily_configurationsOrderByWithRelationInputObjectSchema, daily_configurationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: daily_configurationsWhereInputObjectSchema.optional(), cursor: daily_configurationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DailyConfigurationsScalarFieldEnumSchema, DailyConfigurationsScalarFieldEnumSchema.array()]).optional() }).strict();