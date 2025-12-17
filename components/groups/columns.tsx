"use client";

import {ColumnDef} from "@tanstack/react-table";
import {groups} from "@/generated/prisma/client";
import {Checkbox} from "@/components/ui/checkbox";

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
        header: "Name",
    },
    {
        id: "students",
        header: "Students",
        cell: ({row}) => {
            const group = row.original;
            return <div>{group._count.students}</div>
        }
    },
    {
        id: "actions",
        cell: () => {
            return <div>Edit Delete</div>
        }
    },
]