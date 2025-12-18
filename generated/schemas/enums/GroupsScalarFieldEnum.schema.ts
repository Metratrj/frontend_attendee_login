import * as z from 'zod';

export const GroupsScalarFieldEnumSchema = z.enum(['id', 'name', 'created_at', 'updated_at', 'color'])

export type GroupsScalarFieldEnum = z.infer<typeof GroupsScalarFieldEnumSchema>;