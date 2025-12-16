"use client";

import {ColumnDef} from "@tanstack/react-table";
import {groups} from "@/generated/prisma/client";
import {prisma} from "@/lib/prisma";

export const columns: ColumnDef<groups>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        id: "students",
        header: "Students",
        cell: async ({row}) => {
            const group = row.original;
            const count = await prisma.students.count({where: {groupid: group.id}});

            return <div>{count}</div>
        }
    },
    {
        id: "actions",
        cell: ({row}) => {

            return <div>Edit Delete</div>
        }
    },
]