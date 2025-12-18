import * as z from 'zod';
import { attendance_statusSchema } from '../../enums/attendance_status.schema';
// prettier-ignore
export const attendance_recordsInputSchema = z.object({
    id: z.string(),
    student_id: z.string(),
    login_time: z.date(),
    status: attendance_statusSchema,
    is_relogin: z.boolean(),
    session_token: z.string(),
    created_at: z.date(),
    students: z.unknown()
}).strict();

export type attendance_recordsInputType = z.infer<typeof attendance_recordsInputSchema>;
