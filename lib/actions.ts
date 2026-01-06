"use server";

import {groupsCreateInputObjectZodSchema} from "@/generated/schemas";
import {prisma} from "@/lib/prisma";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import * as z from "zod";



export async function createGroup(data: FormValues) {


    revalidatePath('/dashboard/groups');
    redirect('/dashboard/groups');
}