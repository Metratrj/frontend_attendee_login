import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsSelectObjectSchema as daily_configurationsSelectObjectSchema } from './objects/daily_configurationsSelect.schema';
import { daily_configurationsWhereUniqueInputObjectSchema as daily_configurationsWhereUniqueInputObjectSchema } from './objects/daily_configurationsWhereUniqueInput.schema';

export const daily_configurationsFindUniqueOrThrowSchema: z.ZodType<Prisma.daily_configurationsFindUniqueOrThrowArgs> = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  where: daily_configurationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.daily_configurationsFindUniqueOrThrowArgs>;

export const daily_configurationsFindUniqueOrThrowZodSchema = z.object({ select: daily_configurationsSelectObjectSchema.optional(),  where: daily_configurationsWhereUniqueInputObjectSchema }).strict();