import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.').optional()
}).strict();
export const studentsWhereUniqueInputObjectSchema: z.ZodType<Prisma.studentsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsWhereUniqueInput>;
export const studentsWhereUniqueInputObjectZodSchema = makeSchema();
