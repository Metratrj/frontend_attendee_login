import * as z from 'zod';
// prettier-ignore
export const daily_configurationsInputSchema = z.object({
    date: z.date(),
    late_cutoff_time: z.date(),
    created_at: z.date()
}).strict();

export type daily_configurationsInputType = z.infer<typeof daily_configurationsInputSchema>;
