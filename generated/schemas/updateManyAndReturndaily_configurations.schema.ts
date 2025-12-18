import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsSelectObjectSchema as daily_configurationsSelectObjectSchema } from './objects/daily_configurationsSelect.schema';
import { daily_configurationsUpdateManyMutationInputObjectSchema as daily_configurationsUpdateManyMutationInputObjectSchema } from './objects/daily_configurationsUpdateManyMutationInput.schema';
import { daily_configurationsWhereInputObjectSchema as daily_configurationsWhereInputObjectSchema } from './objects/daily_configurationsWhereInput.schema';

export const daily_configurationsUpdateManyAndReturnSchema: z.ZodType<Prisma.daily_configurationsUpdateManyAndReturnArgs> = z.object({ select: daily_configurationsSelectObjectSchema.optional(), data: daily_configurationsUpdateManyMutationInputObjectSchema, where: daily_configurationsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.daily_configurationsUpdateManyAndReturnArgs>;

export const daily_configurationsUpdateManyAndReturnZodSchema = z.object({ select: daily_configurationsSelectObjectSchema.optional(), data: daily_configurationsUpdateManyMutationInputObjectSchema, where: daily_configurationsWhereInputObjectSchema.optional() }).strict();