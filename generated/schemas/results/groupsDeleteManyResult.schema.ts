import * as z from 'zod';
export const groupsDeleteManyResultSchema = z.object({
  count: z.number()
});