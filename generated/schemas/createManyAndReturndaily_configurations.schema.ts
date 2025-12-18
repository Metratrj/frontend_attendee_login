import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsSelectObjectSchema as daily_configurationsSelectObjectSchema } from './objects/daily_configurationsSelect.schema';
import { daily_configurationsCreateManyInputObjectSchema as daily_configurationsCreateManyInputObjectSchema } from './objects/daily_configurationsCreateManyInput.schema';

export const daily_configurationsCreateManyAndReturnSchema: z.ZodType<Prisma.daily_configurationsCreateManyAndReturnArgs> = z.object({ select: daily_configurationsSelectObjectSchema.optional(), data: z.union([ daily_configurationsCreateManyInputObjectSchema, z.array(daily_configurationsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.daily_configurationsCreateManyAndReturnArgs>;

export const daily_configurationsCreateManyAndReturnZodSchema = z.object({ select: daily_configurationsSelectObjectSchema.optional(), data: z.union([ daily_configurationsCreateManyInputObjectSchema, z.array(daily_configurationsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();