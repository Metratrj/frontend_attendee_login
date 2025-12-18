"use server";

import {groupsCreateInputObjectZodSchema} from "@/generated/schemas";
import {prisma} from "@/lib/prisma";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

const FormSchema = groupsCreateInputObjectZodSchema;

const CreateGroup = FormSchema.omit({id: true, created_at: true});

export async function createGroup(formData: FormData) {
    const validatedFields = CreateGroup.parse({
        name: formData.get("name"),
        color: formData.get("color"),
    });

    await prisma.groups.create({
        data: validatedFields
    });

    revalidatePath('/dashboard/groups');
    redirect('/dashboard/groups');
}