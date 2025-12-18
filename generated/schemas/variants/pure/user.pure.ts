import * as z from 'zod';
// prettier-ignore
export const userModelSchema = z.object({
    id: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    firstname: z.string().min(2, 'Vorname muss mindestens 2 Zeichen haben.').max(250),
    lastname: z.string().min(2, 'Nachname muss mindestens 2 Zeichen haben.').max(250),
    username: z.string().min(2, 'Username muss mindestens 2 Zeichen haben.').max(250),
    email: z.email('Ungültiges eMail Format'),
    password: z.string()
}).strict();

export type userPureType = z.infer<typeof userModelSchema>;
