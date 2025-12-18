import * as z from 'zod';
export const studentsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    username: z.number(),
    firstname: z.number(),
    lastname: z.number(),
    password_hash: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    attendance_records: z.number(),
    groupid: z.number(),
    group: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    firstname: z.string().nullable(),
    lastname: z.string().nullable(),
    password_hash: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    groupid: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    firstname: z.string().nullable(),
    lastname: z.string().nullable(),
    password_hash: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    groupid: z.string().nullable()
  }).nullable().optional()});