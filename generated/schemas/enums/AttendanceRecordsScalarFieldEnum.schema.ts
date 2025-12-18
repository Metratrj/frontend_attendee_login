import * as z from 'zod';

export const AttendanceRecordsScalarFieldEnumSchema = z.enum(['id', 'student_id', 'login_time', 'status', 'is_relogin', 'session_token', 'created_at'])

export type AttendanceRecordsScalarFieldEnum = z.infer<typeof AttendanceRecordsScalarFieldEnumSchema>;