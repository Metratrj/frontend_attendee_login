import {fetchStudentsPage} from "@/lib/data";
import {Suspense} from "react";
import {Pagination} from "@/components/ui/pagination";
import {Table} from "@/components/ui/table";
import Search from "@/components/Search";
import {CreateAttendee} from "@/components/attendees/buttons";
import {DataTable} from "@/components/DataTable";
import {columns} from "@/components/attendees/columns";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const data = await fetchStudentsPage(query);

    return (
        <main>
            <div className="w-full">
                <div className="flex w-full items-center justify-between">
                    <h1 className={`text-2xl`}>Attendee</h1>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Search Attendee..."/>
                    <CreateAttendee/>
                </div>
                <DataTable columns={columns} data={data}/>
               {/* <Suspense key={query + currentPage} fallback={<AttendeeTableSkeleton/>}>
                    <Table query={query} currentPage={currentPage}/>
                </Suspense>*/}
                {/*<div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages}/>
                </div>*/}
            </div>
        </main>
    );
}