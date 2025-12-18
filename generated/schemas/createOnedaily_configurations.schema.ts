import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsSelectObjectSchema as daily_configurationsSelectObjectSchema } from './objects/daily_configurationsSelect.schema';
import { daily_configurationsCreateInputObjectSchema as daily_configurationsCreateInputObjectSchema } from './objects/daily_configurationsCreateInput.schema';
import { daily_configurationsUncheckedCreateInputObjectSchema as daily_configurationsUncheckedCreateInputObjectSchema } from './objects/daily_configurationsUncheckedCreateInput.schema';

export const daily_configurationsCreateOneSchema: z.ZodType<Prisma.daily_configurationsCreateArgs> = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  data: z.union([daily_configurationsCreateInputObjectSchema, daily_configurationsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.daily_configurationsCreateArgs>;

export const daily_configurationsCreateOneZodSchema = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  data: z.union([daily_configurationsCreateInputObjectSchema, daily_configurationsUncheckedCreateInputObjectSchema]) }).strict();