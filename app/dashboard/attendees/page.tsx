import {fetchStudentsPage} from "@/lib/data";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchStudentsPage(query);

    return (
        <>
            Attendees
        </>
    );
}