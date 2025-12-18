import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsCreateNestedManyWithoutGroupInputObjectSchema as studentsCreateNestedManyWithoutGroupInputObjectSchema } from './studentsCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().max(255).min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.'),
  created_at: z.coerce.date().optional(),
  color: z.string().max(10).min(1, 'Bitte Farbe auswählen.').optional(),
  students: z.lazy(() => studentsCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const groupsCreateInputObjectSchema: z.ZodType<Prisma.groupsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsCreateInput>;
export const groupsCreateInputObjectZodSchema = makeSchema();
