import Link from "next/link";
import {PlusIcon} from "lucide-react";

export function CreateAttendee() {
    return (
        <Link href="/dashboard/attendees/create">
            <span className="hidden md:block">Create Attendee</span>{' '}
            <PlusIcon className="h-5 md:ml-4"/>
        </Link>
    )
}