import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsCreateManyGroupInputObjectSchema as studentsCreateManyGroupInputObjectSchema } from './studentsCreateManyGroupInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => studentsCreateManyGroupInputObjectSchema), z.lazy(() => studentsCreateManyGroupInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const studentsCreateManyGroupInputEnvelopeObjectSchema: z.ZodType<Prisma.studentsCreateManyGroupInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.studentsCreateManyGroupInputEnvelope>;
export const studentsCreateManyGroupInputEnvelopeObjectZodSchema = makeSchema();
