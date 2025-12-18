import * as z from 'zod';
export const userFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});