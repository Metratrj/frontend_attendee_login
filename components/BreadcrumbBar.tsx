"use client";

import {usePathname} from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Fragment} from "react";

export function BreadcrumbBar() {
    const path = usePathname();
    const segments = path.split('/').filter(seg => seg !== ''); // Filter out empty strings from leading/trailing slashes
    const lastSegment = segments.pop();


    console.log(segments);
    console.log(lastSegment);


    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    {segments.map((seg, idx) => {
                        return (
                            <Fragment key={idx}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href={`/${segments.slice(0, idx + 1).join('/')}`} className="capitalize">{seg}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem><BreadcrumbSeparator/>
                            </Fragment>
                        )
                    })}
                    {lastSegment && ( // Only render if lastSegment exists and isn't empty
                        <BreadcrumbItem>
                            <BreadcrumbPage className="capitalize">
                                {lastSegment} {/* Use the actual last segment */}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
}