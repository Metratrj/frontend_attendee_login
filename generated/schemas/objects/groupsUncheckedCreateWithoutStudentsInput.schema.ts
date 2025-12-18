import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  color: z.string().optional()
}).strict();
export const groupsUncheckedCreateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.groupsUncheckedCreateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.groupsUncheckedCreateWithoutStudentsInput>;
export const groupsUncheckedCreateWithoutStudentsInputObjectZodSchema = makeSchema();
