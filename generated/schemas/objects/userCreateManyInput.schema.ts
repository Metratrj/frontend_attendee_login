import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  firstname: z.string().max(250).min(2, 'Vorname muss mindestens 2 Zeichen haben.'),
  lastname: z.string().max(250).min(2, 'Nachname muss mindestens 2 Zeichen haben.'),
  username: z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.'),
  email: z.email('Ungültiges eMail Format').max(255),
  password: z.string().max(255)
}).strict();
export const userCreateManyInputObjectSchema: z.ZodType<Prisma.userCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateManyInput>;
export const userCreateManyInputObjectZodSchema = makeSchema();
