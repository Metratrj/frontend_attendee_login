import * as z from 'zod';

export const attendance_statusSchema = z.enum(['PRESENT', 'LATE'])

export type attendance_status = z.infer<typeof attendance_statusSchema>;