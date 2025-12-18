import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  attendance_records: z.boolean().optional()
}).strict();
export const StudentsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StudentsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudentsCountOutputTypeSelect>;
export const StudentsCountOutputTypeSelectObjectZodSchema = makeSchema();
