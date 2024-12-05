import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "@/components/ui/button"

interface StationPopoverProps {
    name: string;
    content?: React.ReactNode;
    children?: React.ReactNode;
    triggerClassName?: string;
}

export function StationPopover({ name, content, children, triggerClassName }: StationPopoverProps) {
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="link" className={`text-lg ${triggerClassName}`}>
                        {name.split('\n').map((part, i) => (
                            <React.Fragment key={part}>
                                {part}
                                {i < name.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    {content || children}
                </PopoverContent>
            </Popover>
            <div className="fixed bottom-2 right-2 z-50 p-2 bg-gray-800 text-white rounded text-sm opacity-75">
                <div className="sm:hidden">xs</div>
                <div className="hidden sm:block md:hidden">sm</div>
                <div className="hidden md:block lg:hidden">md</div>
                <div className="hidden lg:block xl:hidden">lg</div>
                <div className="hidden xl:block 2xl:hidden">xl</div>
                <div className="hidden 2xl:block">2xl</div>
            </div>
        </>
    );
}