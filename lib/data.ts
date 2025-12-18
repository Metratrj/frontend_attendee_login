"use server";

import {prisma} from "@/lib/prisma";
import {type students} from "@/generated/prisma/client"

export async function fetchStudentsPage(query: string): Promise<students[]> {
    try {
        const data: students[] = await prisma.students.findMany();
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch students.\n" + error);
    }
}

export async function fetchGroups(query: string) {
    try {
        return await prisma.groups.findMany();
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch groups.\n" + error);
    }
}

export async function fetchGroupsWithCount(query: string) {
    try {
        return await prisma.groups.findMany({
            include: {
                _count: {
                    select: {students: true},
                },
            },
        });
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch groups.\n" + error);
    }
}



export async function fetchStudentsPerGroup(id: string) {
    try {
        return await prisma.students.count({where: {groupid: id}});
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch student count.\n" + error);
    }
}