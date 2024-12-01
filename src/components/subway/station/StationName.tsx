import { cn } from "@/lib/utils";
import * as React from "react";
import { StationPopover } from "./StationPopover";

interface StationNameProps {
    name: string;
    className?: string;
    content?: string;
}

export function StationName({ name, className, content }: StationNameProps) {
    return (
        <div className={cn(
            "station-name-wrapper relative",
            "flex items-center",
            "h-full",
            className
        )}>
            <StationPopover
                name={name}
                content={content || ""}
                triggerClassName={cn(
                    "station-name",
                    "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
                    "hover:text-current",
                    "transition-all duration-300"
                )}
            />
        </div>
    );
}