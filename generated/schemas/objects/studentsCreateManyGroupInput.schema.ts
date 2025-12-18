import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'),
  firstname: z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.').optional(),
  lastname: z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.').optional(),
  password_hash: z.string().max(255),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const studentsCreateManyGroupInputObjectSchema: z.ZodType<Prisma.studentsCreateManyGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.studentsCreateManyGroupInput>;
export const studentsCreateManyGroupInputObjectZodSchema = makeSchema();
