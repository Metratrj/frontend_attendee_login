import * as z from 'zod';
export const groupsAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});