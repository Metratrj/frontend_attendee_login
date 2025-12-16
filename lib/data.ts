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