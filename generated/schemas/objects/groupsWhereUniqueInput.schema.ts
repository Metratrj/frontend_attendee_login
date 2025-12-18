import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().max(255).min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.').optional()
}).strict();
export const groupsWhereUniqueInputObjectSchema: z.ZodType<Prisma.groupsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsWhereUniqueInput>;
export const groupsWhereUniqueInputObjectZodSchema = makeSchema();
