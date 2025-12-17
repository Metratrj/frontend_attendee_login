import Link from "next/link";
import {PlusIcon} from "lucide-react";

export function CreateGroup() {
    return (
        <Link href="/dashboard/groups/create">
            <span className="hidden md:block">Create Group</span>{' '}
            <PlusIcon className="h-5 md:ml-4"/>
        </Link>
    )
}