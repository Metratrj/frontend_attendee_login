import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { studentsUncheckedCreateNestedManyWithoutGroupInputObjectSchema as studentsUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './studentsUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().max(255).min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.'),
  created_at: z.coerce.date().optional(),
  color: z.string().max(10).min(1, 'Bitte Farbe auswählen.').optional(),
  students: z.lazy(() => studentsUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const groupsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.groupsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsUncheckedCreateInput>;
export const groupsUncheckedCreateInputObjectZodSchema = makeSchema();
