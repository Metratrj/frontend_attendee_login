"use client"

import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {BookOpen, Command, SquareTerminal} from "lucide-react";
import {NavMain} from "@/components/NavMain";

const data = {
navMain: [
    {
        title: "Anweseinheiten",
        url: "/attendance",
        icon: SquareTerminal,
    },
    {
        title: "Verwaltung",
        url: "#",
        icon: BookOpen,
        items: [
            {
                title: "Gruppen",
                url: "/groups",
            },
            {
                title: "Teilnehmer",
                url: "/attendee",
            }
        ]
    }
]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <>
            <Sidebar variant={"inset"} {...props}>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <a href="/dashboard">
                                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                        <Command className="size-4" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">Punctua</span>
                                        <span className="truncate font-xs">CBM Projektmanagement GmbH</span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <NavMain items={data.navMain}/>
                </SidebarContent>
            </Sidebar>
        </>
    );
}