import { fetchGroupsWithCount } from "@/lib/data";
import { DataTable } from "@/components/DataTable/DataTable";
import { columns } from "@/components/groups/columns";
import {Button} from "@/components/ui/button";
import {CirclePlus} from "lucide-react";
import Link from "next/link";
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import CreateGroupForm from "@/components/CreateGroupForm";

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
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size="sm" className="hidden h-7 sm:flex">
                                    <CirclePlus />
                                    <span>Create</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Create Group</SheetTitle>
                                    <SheetDescription>Create a new Group with Attendees</SheetDescription>
                                </SheetHeader>
                                <CreateGroupForm />

                                <SheetFooter>
                                    <Button variant="outline" type="submit" form="create-group-form">Save</Button>
                                    <SheetClose asChild>
                                        <Button variant="outline">Close</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
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