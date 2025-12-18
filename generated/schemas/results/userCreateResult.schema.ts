import * as z from 'zod';
export const userCreateResultSchema = z.object({
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string()
});