import * as z from 'zod';
export const studentsDeleteManyResultSchema = z.object({
  count: z.number()
});