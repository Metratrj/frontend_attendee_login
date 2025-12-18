import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsSelectObjectSchema as daily_configurationsSelectObjectSchema } from './objects/daily_configurationsSelect.schema';
import { daily_configurationsUpdateInputObjectSchema as daily_configurationsUpdateInputObjectSchema } from './objects/daily_configurationsUpdateInput.schema';
import { daily_configurationsUncheckedUpdateInputObjectSchema as daily_configurationsUncheckedUpdateInputObjectSchema } from './objects/daily_configurationsUncheckedUpdateInput.schema';
import { daily_configurationsWhereUniqueInputObjectSchema as daily_configurationsWhereUniqueInputObjectSchema } from './objects/daily_configurationsWhereUniqueInput.schema';

export const daily_configurationsUpdateOneSchema: z.ZodType<Prisma.daily_configurationsUpdateArgs> = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  data: z.union([daily_configurationsUpdateInputObjectSchema, daily_configurationsUncheckedUpdateInputObjectSchema]), where: daily_configurationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.daily_configurationsUpdateArgs>;

export const daily_configurationsUpdateOneZodSchema = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  data: z.union([daily_configurationsUpdateInputObjectSchema, daily_configurationsUncheckedUpdateInputObjectSchema]), where: daily_configurationsWhereUniqueInputObjectSchema }).strict();