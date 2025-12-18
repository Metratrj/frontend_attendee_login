import * as z from 'zod';
// prettier-ignore
export const studentsResultSchema = z.object({
    id: z.string(),
    username: z.string().min(2, 'Username muss mindestens 2 Zeichen haben.').max(250),
    firstname: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben.').max(250),
    lastname: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben.').max(250),
    password_hash: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    attendance_records: z.array(z.unknown()),
    groupid: z.string().nullable(),
    group: z.unknown().nullable()
}).strict();

export type studentsResultType = z.infer<typeof studentsResultSchema>;
