import * as z from 'zod';
export const attendance_recordsFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  student_id: z.string(),
  login_time: z.date(),
  status: z.unknown(),
  is_relogin: z.boolean(),
  session_token: z.string(),
  created_at: z.date(),
  students: z.unknown()
}));