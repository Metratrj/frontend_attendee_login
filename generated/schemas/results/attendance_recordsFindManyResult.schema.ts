import * as z from 'zod';
export const attendance_recordsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  student_id: z.string(),
  login_time: z.date(),
  status: z.unknown(),
  is_relogin: z.boolean(),
  session_token: z.string(),
  created_at: z.date(),
  students: z.unknown()
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