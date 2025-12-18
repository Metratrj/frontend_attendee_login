import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsSelectObjectSchema as daily_configurationsSelectObjectSchema } from './objects/daily_configurationsSelect.schema';
import { daily_configurationsWhereUniqueInputObjectSchema as daily_configurationsWhereUniqueInputObjectSchema } from './objects/daily_configurationsWhereUniqueInput.schema';

export const daily_configurationsFindUniqueSchema: z.ZodType<Prisma.daily_configurationsFindUniqueArgs> = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  where: daily_configurationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.daily_configurationsFindUniqueArgs>;

export const daily_configurationsFindUniqueZodSchema = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  where: daily_configurationsWhereUniqueInputObjectSchema }).strict();