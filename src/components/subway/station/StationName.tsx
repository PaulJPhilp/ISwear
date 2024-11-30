import { cn } from "@/lib/utils";
import { getCollection } from 'astro:content';
import { marked } from 'marked';
import * as React from "react";
import { StationPopover } from "./StationPopover";

interface StationNameProps {
    name: string;
    className?: string;
}

export function StationName({
    name,
    className,
}: StationNameProps) {
    const [content, setContent] = React.useState<string>("");

    React.useEffect(() => {
        const loadContent = async () => {
            try {
                const fileName = name.toLowerCase()
                    .replace(/'/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');

                const stations = await getCollection('stations');
                const station = stations.find(entry =>
                    entry.slug === fileName || entry.id === `${fileName}.mdx`
                );

                if (station) {
                    // Convert the MDX content to HTML using marked
                    const htmlContent = await marked.parse(station.body);
                    setContent(htmlContent);
                } else {
                    console.warn(`No content found for station: ${name} (${fileName})`);
                    setContent("");
                }
            } catch (error) {
                console.error(`Error loading content for station: ${name}`, error);
                setContent("");
            }
        };

        loadContent();
    }, [name]);

    return (
        <button
            className={cn(
                "w-full p-0 bg-transparent border-none text-left",
                className
            )}
            onClick={(e) => {
                e.stopPropagation();
            }}
            type="button"
        >
            <StationPopover
                name={name}
                content={content}
                triggerClassName={cn(
                    "station-name",
                    className
                )}
            />
        </button>
    );
}