import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string().max(250).min(2, 'Username muss mindestens 2 Zeichen haben.').optional(),
  email: z.email('Ungültiges eMail Format').max(255).optional()
}).strict();
export const userWhereUniqueInputObjectSchema: z.ZodType<Prisma.userWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.userWhereUniqueInput>;
export const userWhereUniqueInputObjectZodSchema = makeSchema();
