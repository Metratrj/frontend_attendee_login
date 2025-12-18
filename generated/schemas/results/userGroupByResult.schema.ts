import * as z from 'zod';
export const userGroupByResultSchema = z.array(z.object({
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));