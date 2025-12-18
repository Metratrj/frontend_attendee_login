import * as z from 'zod';
export const studentsCreateManyResultSchema = z.object({
  count: z.number()
});