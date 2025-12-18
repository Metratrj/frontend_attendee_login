import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StudentsListRelationFilterObjectSchema as StudentsListRelationFilterObjectSchema } from './StudentsListRelationFilter.schema'

const groupswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => groupsWhereInputObjectSchema), z.lazy(() => groupsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => groupsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => groupsWhereInputObjectSchema), z.lazy(() => groupsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255).min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.')]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  color: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(10).min(1, 'Bitte Farbe auswählen.')]).optional(),
  students: z.lazy(() => StudentsListRelationFilterObjectSchema).optional()
}).strict();
export const groupsWhereInputObjectSchema: z.ZodType<Prisma.groupsWhereInput> = groupswhereinputSchema as unknown as z.ZodType<Prisma.groupsWhereInput>;
export const groupsWhereInputObjectZodSchema = groupswhereinputSchema;
