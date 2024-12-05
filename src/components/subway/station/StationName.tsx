import { cn } from "@/lib/utils";
import * as React from "react";
import { StationPopover } from "./StationPopover";

interface StationNameProps {
    name: string;
    content: React.ReactNode;
}

export function StationName({ name, content }: StationNameProps) {
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

    const displayContent = (content && typeof content === 'object' && 'render' in content) 
        ? asyncContent 
        : content;

    return (
        <div className={cn(
            "station-name-wrapper relative",
            "flex items-center",
            "h-full"
        )}>
            <StationPopover
                name={name}
                content={displayContent}
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