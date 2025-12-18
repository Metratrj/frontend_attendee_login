import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { daily_configurationsSelectObjectSchema as daily_configurationsSelectObjectSchema } from './daily_configurationsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => daily_configurationsSelectObjectSchema).optional()
}).strict();
export const daily_configurationsArgsObjectSchema = makeSchema();
export const daily_configurationsArgsObjectZodSchema = makeSchema();
