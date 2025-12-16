import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'prefer'});

export async function fetchStudentsPage(query: string) {
    try {
        //const data = await sql<[]>`SELECT * FROM students`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error("Failed to fetch students.\n"+ error);
    }
}