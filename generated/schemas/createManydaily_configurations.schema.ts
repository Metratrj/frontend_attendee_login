import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { daily_configurationsCreateManyInputObjectSchema as daily_configurationsCreateManyInputObjectSchema } from './objects/daily_configurationsCreateManyInput.schema';

export const daily_configurationsCreateManySchema: z.ZodType<Prisma.daily_configurationsCreateManyArgs> = z.object({ data: z.union([ daily_configurationsCreateManyInputObjectSchema, z.array(daily_configurationsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.daily_configurationsCreateManyArgs>;

export const daily_configurationsCreateManyZodSchema = z.object({ data: z.union([ daily_configurationsCreateManyInputObjectSchema, z.array(daily_configurationsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();