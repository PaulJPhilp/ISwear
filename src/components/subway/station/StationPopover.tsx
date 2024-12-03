import * as React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../ui/popover";
import { Button } from "@/components/ui/button"

interface StationPopoverProps {
    name: string;
    children: React.ReactNode;
}

export function StationPopover({ name, children }: StationPopoverProps) {
    const [open, setOpen] = React.useState(false);

    const handleOpenChange = React.useCallback((isOpen: boolean) => {
        setOpen(isOpen);
    }, []);

    return (
        <div className="flex flex-col sm:flex-row p-4 sm:p-8 lg:p-12 xl:p-16 border-2 border-dashed border-purple-900 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56">
            <div className="flex flex-row sm:flex-col gap-4 sm:gap-8 lg:gap-12 xl:gap-16 border-2 border-dashed border-green-800 h-full">
                <div className="p-2 sm:p-4 lg:p-6 xl:p-8 w-auto sm:w-64 lg:w-72 xl:w-80 relative border-2 border-dashed border-orange-800">
                    <Popover open={open} onOpenChange={handleOpenChange}>
                        <PopoverTrigger asChild>
                            <Button variant="link" className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-medium">
                                {name.split('\n').map((part, i, arr) => (
                                    <React.Fragment key={`station-name-part-${part}`}>
                                        {part}
                                        {i < arr.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[280px] sm:w-80 lg:w-96 xl:w-[440px]">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    {children}
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}