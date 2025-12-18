import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsWhereInputObjectSchema as daily_configurationsWhereInputObjectSchema } from './objects/daily_configurationsWhereInput.schema';

export const daily_configurationsDeleteManySchema: z.ZodType<Prisma.daily_configurationsDeleteManyArgs> = z.object({ where: daily_configurationsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.daily_configurationsDeleteManyArgs>;

export const daily_configurationsDeleteManyZodSchema = z.object({ where: daily_configurationsWhereInputObjectSchema.optional() }).strict();