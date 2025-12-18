import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsUpdateManyMutationInputObjectSchema as daily_configurationsUpdateManyMutationInputObjectSchema } from './objects/daily_configurationsUpdateManyMutationInput.schema';
import { daily_configurationsWhereInputObjectSchema as daily_configurationsWhereInputObjectSchema } from './objects/daily_configurationsWhereInput.schema';

export const daily_configurationsUpdateManySchema: z.ZodType<Prisma.daily_configurationsUpdateManyArgs> = z.object({ data: daily_configurationsUpdateManyMutationInputObjectSchema, where: daily_configurationsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.daily_configurationsUpdateManyArgs>;

export const daily_configurationsUpdateManyZodSchema = z.object({ data: daily_configurationsUpdateManyMutationInputObjectSchema, where: daily_configurationsWhereInputObjectSchema.optional() }).strict();