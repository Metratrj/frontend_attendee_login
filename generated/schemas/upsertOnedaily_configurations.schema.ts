import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsSelectObjectSchema as daily_configurationsSelectObjectSchema } from './objects/daily_configurationsSelect.schema';
import { daily_configurationsWhereUniqueInputObjectSchema as daily_configurationsWhereUniqueInputObjectSchema } from './objects/daily_configurationsWhereUniqueInput.schema';
import { daily_configurationsCreateInputObjectSchema as daily_configurationsCreateInputObjectSchema } from './objects/daily_configurationsCreateInput.schema';
import { daily_configurationsUncheckedCreateInputObjectSchema as daily_configurationsUncheckedCreateInputObjectSchema } from './objects/daily_configurationsUncheckedCreateInput.schema';
import { daily_configurationsUpdateInputObjectSchema as daily_configurationsUpdateInputObjectSchema } from './objects/daily_configurationsUpdateInput.schema';
import { daily_configurationsUncheckedUpdateInputObjectSchema as daily_configurationsUncheckedUpdateInputObjectSchema } from './objects/daily_configurationsUncheckedUpdateInput.schema';

export const daily_configurationsUpsertOneSchema: z.ZodType<Prisma.daily_configurationsUpsertArgs> = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  where: daily_configurationsWhereUniqueInputObjectSchema, create: z.union([ daily_configurationsCreateInputObjectSchema, daily_configurationsUncheckedCreateInputObjectSchema ]), update: z.union([ daily_configurationsUpdateInputObjectSchema, daily_configurationsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.daily_configurationsUpsertArgs>;

export const daily_configurationsUpsertOneZodSchema = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  where: daily_configurationsWhereUniqueInputObjectSchema, create: z.union([ daily_configurationsCreateInputObjectSchema, daily_configurationsUncheckedCreateInputObjectSchema ]), update: z.union([ daily_configurationsUpdateInputObjectSchema, daily_configurationsUncheckedUpdateInputObjectSchema ]) }).strict();