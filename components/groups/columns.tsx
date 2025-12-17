"use client";

import {ColumnDef} from "@tanstack/react-table";
import {groups} from "@/generated/prisma/client";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {ArrowDownUp} from "lucide-react";

export const columns: ColumnDef<groups>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all groups"
            />
        ),
        cell: ({row}) => (
            <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select group"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Name
                    <ArrowDownUp className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        id: "students",
        header: "Students",
        cell: ({row}) => row.original._count.students
    },
    {
        id: "actions",
        cell: () => {
            return <div>Edit Delete</div>
        }
    },
]