import * as z from 'zod';
export const studentsCreateResultSchema = z.object({
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
});