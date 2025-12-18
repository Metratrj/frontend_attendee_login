import * as z from 'zod';
export const groupsCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  students: z.array(z.unknown()),
  color: z.string()
});