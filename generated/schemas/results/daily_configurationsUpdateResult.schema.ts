import * as z from 'zod';
export const daily_configurationsUpdateResultSchema = z.nullable(z.object({
  date: z.date(),
  late_cutoff_time: z.date(),
  created_at: z.date()
}));