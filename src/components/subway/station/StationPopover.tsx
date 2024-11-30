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
                    className={cn("station-name", triggerClassName)}
                    onClick={handleClick}
                >
                    {name}
                </button>
            </PopoverTrigger>
            <PopoverContent 
                className="station-popover w-[330px] max-h-[400px] overflow-y-auto" 
                side="right" 
                sideOffset={64}
                align="center"
            >
                <div>
                    <div 
                        className="content prose prose-sm"
                        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
}