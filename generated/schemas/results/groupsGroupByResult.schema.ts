import * as z from 'zod';
export const groupsGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  color: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    students: z.number(),
    color: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    color: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    color: z.string().nullable()
  }).nullable().optional()
}));