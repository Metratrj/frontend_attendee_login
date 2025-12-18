import * as z from 'zod';
export const daily_configurationsAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});