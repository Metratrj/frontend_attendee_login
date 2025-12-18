import * as z from 'zod';
export const studentsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  password_hash: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  attendance_records: z.array(z.unknown()),
  groupid: z.string().optional(),
  group: z.unknown().optional()
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