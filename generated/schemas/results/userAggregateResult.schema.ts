import * as z from 'zod';
export const userAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    firstname: z.number(),
    lastname: z.number(),
    username: z.number(),
    email: z.number(),
    password: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    firstname: z.string().nullable(),
    lastname: z.string().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    firstname: z.string().nullable(),
    lastname: z.string().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable()
  }).nullable().optional()});