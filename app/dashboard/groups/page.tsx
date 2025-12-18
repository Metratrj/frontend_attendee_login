import { fetchGroupsWithCount } from "@/lib/data";
import { DataTable } from "@/components/DataTable/DataTable";
import { columns } from "@/components/groups/columns";
import {Button} from "@/components/ui/button";
import {CirclePlus} from "lucide-react";
import Link from "next/link";


export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const data = await fetchGroupsWithCount(query);

    return (
        <main>
            <div className="w-full">
                <div className="flex w-full items-center justify-between">
                    <h1 className={`text-2xl`}>Groups</h1>
                    <div className="ml-auto flex items-center gap-2">
                        <Link href="/dashboard/groups/create">
                            <Button size="sm" className="hidden h-7 sm:flex">
                                <CirclePlus />
                                <span>Create</span>
                            </Button>
                        </Link>
                    </div>
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