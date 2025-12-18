import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const attendance_recordsWhereUniqueInputObjectSchema: z.ZodType<Prisma.attendance_recordsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.attendance_recordsWhereUniqueInput>;
export const attendance_recordsWhereUniqueInputObjectZodSchema = makeSchema();
