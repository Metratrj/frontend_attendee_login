import * as z from 'zod';
// prettier-ignore
export const daily_configurationsModelSchema = z.object({
    date: z.date(),
    late_cutoff_time: z.date(),
    created_at: z.date()
}).strict();

export type daily_configurationsPureType = z.infer<typeof daily_configurationsModelSchema>;
