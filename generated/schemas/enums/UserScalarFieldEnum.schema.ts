import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'created_at', 'updated_at', 'firstname', 'lastname', 'username', 'email', 'password'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;