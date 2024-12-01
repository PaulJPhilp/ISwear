import { cn } from "~/utils/utils";
import * as React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../ui/popover";

interface StationPopoverProps {
    name: string;
    content: string;
    triggerClassName?: string;
}

export function StationPopover({ name, content, triggerClassName }: StationPopoverProps) {
    const [open, setOpen] = React.useState(false);

    const handleOpenChange = React.useCallback((isOpen: boolean) => {
        setOpen(isOpen);
    }, []);

    const handleClick = React.useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setOpen(true);
    }, []);

    return (
        <Popover open={open} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    aria-label={`View information for ${name} station`}
                    className={cn(
                        "station-name",
                        "inline-flex items-center justify-start",
                        "rounded-sm outline-none",
                        "text-left rtl:text-right",
                        "px-1 sm:px-1.5 md:px-2 lg:px-2.5 xl:px-3",
                        "py-0.5 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5",
                        "hover:bg-black/5 focus:bg-black/5",
                        "dark:hover:bg-white/5 dark:focus:bg-white/5",
                        "transition-all duration-300",
                        triggerClassName
                    )}
                    onClick={handleClick}
                >
                    {name}
                </button>
            </PopoverTrigger>
            <PopoverContent 
                className={cn(
                    "station-popover",
                    "w-[280px] sm:w-[300px] md:w-[330px] lg:w-[360px] xl:w-[400px]",
                    "max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] xl:max-h-[500px]",
                    "p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7",
                    "overflow-y-auto",
                    "animate-in fade-in-0 zoom-in-95",
                    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                )} 
                side="right" 
                sideOffset={20}
                align="center"
            >
                <div className={cn(
                    "relative",
                    "space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6"
                )}>
                    <div 
                        className={cn(
                            "content prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl",
                            "max-w-none",
                            "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                        )}
                    >
                        {content}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}