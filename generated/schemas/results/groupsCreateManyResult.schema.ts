import * as z from 'zod';
export const groupsCreateManyResultSchema = z.object({
  count: z.number()
});