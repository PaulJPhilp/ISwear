import * as React from "react";
import { cn } from "../../lib/utils";
import { StationPopover } from "./StationPopover";

interface StationNameProps {
    name: string;
    className?: string;
    content?: { render: () => Promise<string> };
}

export function StationName({
    name,
    className,
    content = { render: () => Promise.resolve("") },
}: StationNameProps) {
    const [contentText, setContentText] = React.useState("");

    React.useEffect(() => {
        content.render().then(setContentText);
    }, [content]);

    return (
        // biome-ignore lint/a11y/useKeyWithClickEvents: Keyboard interactions are handled by the button element inside StationPopover
        <div
            className="absolute left-6 top-6 w-[calc(50%-1rem)]"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <StationPopover
                name={name}
                content={contentText}
                triggerClassName={cn(
                    "text-sm text-purple-900 whitespace-nowrap font-medium",
                    "transition-all duration-300 ease-in-out hover:text-red-900 hover:font-semibold",
                    className
                )}
            />
        </div>
    );
}