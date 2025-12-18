import * as z from 'zod';
export const attendance_recordsGroupByResultSchema = z.array(z.object({
  id: z.string(),
  student_id: z.string(),
  login_time: z.date(),
  is_relogin: z.boolean(),
  session_token: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    student_id: z.number(),
    login_time: z.number(),
    status: z.number(),
    is_relogin: z.number(),
    session_token: z.number(),
    created_at: z.number(),
    students: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    student_id: z.string().nullable(),
    login_time: z.date().nullable(),
    session_token: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    student_id: z.string().nullable(),
    login_time: z.date().nullable(),
    session_token: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));