import {fetchGroups, fetchGroupsWithCount} from "@/lib/data";
import Search from "@/components/Search";
import {CreateGroup} from "@/components/groups/buttons";
import { DataTable } from "@/components/DataTable/DataTable";
import { columns } from "@/components/groups/columns";


export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const    searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const data = await fetchGroupsWithCount(query);
    console.log(data);


    return (
        <main>
            <div className="w-full">
                <div className="flex w-full items-center justify-between">
                    <h1 className={`text-2xl`}>Groups</h1>
                </div>
                {/*<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Search Groups..."/>
                    <CreateGroup/>
                </div>*/}
            </div>
            <DataTable columns={columns} data={data} />
        </main>
    );
}