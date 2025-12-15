import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/AppSidebar";
import {Separator} from "@/components/ui/separator";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage} from "@/components/ui/breadcrumb";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                                />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            Dashboard
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>





            {/*<div className="flex h-screen flex-col mdx:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav/>
                </div>
                <div className="grow p-6 md:overflow-y-auto mdx:p-12">{children}</div>
            </div>*/}
        </>
    );
}