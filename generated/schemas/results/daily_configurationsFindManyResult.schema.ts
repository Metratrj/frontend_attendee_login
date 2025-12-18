import * as z from 'zod';
export const daily_configurationsFindManyResultSchema = z.object({
  data: z.array(z.object({
  date: z.date(),
  late_cutoff_time: z.date(),
  created_at: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});