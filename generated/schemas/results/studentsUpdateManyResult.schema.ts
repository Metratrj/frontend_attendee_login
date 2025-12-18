import * as z from 'zod';
export const studentsUpdateManyResultSchema = z.object({
  count: z.number()
});