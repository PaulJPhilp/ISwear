import { cn } from "@/lib/utils";
import * as React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover";

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
                        "cursor-pointer hover:underline",
                        triggerClassName
                    )}
                    onClick={handleClick}
                >
                    {name}
                </button>
            </PopoverTrigger>
            <PopoverContent className="z-[100] w-[500px] dark" side="right">
                <div className="p-4">
                    <h4 className="text-sm font-semibold text-orange-500">{name}</h4>
                    <div className="mt-2 text-sm text-gray-900">{content}</div>
                </div>
            </PopoverContent>
        </Popover>
    );
}