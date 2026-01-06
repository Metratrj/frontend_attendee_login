import {groupsCreateInputObjectZodSchema} from "@/generated/schemas";
import * as z from "zod";

const makeSchema = () => {
    return groupsCreateInputObjectZodSchema.omit({id: true, created_at: true}).extend({
        studentCount: z.coerce.number().min(0).default(10)
    });
};
export const formSchema = makeSchema();

export type FormValues = z.infer<typeof formSchema>;