import * as z from 'zod';
export const daily_configurationsGroupByResultSchema = z.array(z.object({
  date: z.date(),
  late_cutoff_time: z.date(),
  created_at: z.date(),
  _count: z.object({
    date: z.number(),
    late_cutoff_time: z.number(),
    created_at: z.number()
  }).optional(),
  _min: z.object({
    date: z.date().nullable(),
    late_cutoff_time: z.date().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    date: z.date().nullable(),
    late_cutoff_time: z.date().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));