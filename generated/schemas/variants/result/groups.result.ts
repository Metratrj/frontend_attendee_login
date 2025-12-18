import * as z from 'zod';
// prettier-ignore
export const groupsResultSchema = z.object({
    id: z.string(),
    name: z.string().min(2, 'Der Gruppenname muss 2 Zeichen oder länger sein.'),
    created_at: z.date(),
    updated_at: z.date(),
    students: z.array(z.unknown()),
    color: z.string().min(1, 'Bitte Farbe auswählen.')
}).strict();

export type groupsResultType = z.infer<typeof groupsResultSchema>;
