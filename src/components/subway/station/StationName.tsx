import { cn } from "@/lib/utils";
import { StationPopover } from "./StationPopover";
//import * as React from "react";
//import { StationPopover } from "./StationPopover";

interface StationNameProps {
    name: string;
}

export function StationName({ name }: StationNameProps) {

    /***
     * Handle async content
     *
    const [asyncContent, setAsyncContent] = React.useState<React.ReactNode | null>(null);

    React.useEffect(() => {
        if (content && typeof content === 'object' && 'render' in content) {
            const loadContent = async () => {
                const result = await (content as { render: () => Promise<React.ReactNode> }).render();
                setAsyncContent(result);
            };
            loadContent();
        }
    }, [content]);

    const displayContent: React.ReactNode = (content && typeof content === 'object' && 'render' in content) 
        ? asyncContent 
        : content;
    ***/

    return (
        <div className={cn(
            "station-name-wrapper ",
        )}>
            <StationPopover
                name={name}
                triggerClassName={cn(
                    "station-name",
                    "text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl",
                    "hover:text-current",
                    "transition-all duration-300"
                )}
            />
        </div>
    );
}