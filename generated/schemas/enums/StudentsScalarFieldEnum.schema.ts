import * as z from 'zod';

export const StudentsScalarFieldEnumSchema = z.enum(['id', 'username', 'firstname', 'lastname', 'password_hash', 'created_at', 'updated_at', 'groupid'])

export type StudentsScalarFieldEnum = z.infer<typeof StudentsScalarFieldEnumSchema>;