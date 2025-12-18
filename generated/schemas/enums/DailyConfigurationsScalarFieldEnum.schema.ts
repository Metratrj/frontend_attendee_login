import * as z from 'zod';

export const DailyConfigurationsScalarFieldEnumSchema = z.enum(['date', 'late_cutoff_time', 'created_at'])

export type DailyConfigurationsScalarFieldEnum = z.infer<typeof DailyConfigurationsScalarFieldEnumSchema>;