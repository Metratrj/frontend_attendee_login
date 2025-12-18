import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().max(255).min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.'),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  color: z.string().max(10).min(1, 'Bitte Farbe auswählen.').optional()
}).strict();
export const groupsCreateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.groupsCreateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsCreateWithoutStudentsInput>;
export const groupsCreateWithoutStudentsInputObjectZodSchema = makeSchema();
