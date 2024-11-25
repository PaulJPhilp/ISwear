import * as React from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { twMerge } from "tailwind-merge"

interface StationNameProps {
  name: string
  className?: string
}

export function StationName({ name, className }: StationNameProps) {
  return (
    <div className="relative z-50">
      <Popover>
        <PopoverTrigger asChild>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className={twMerge(
              'absolute right-[50%] mr-2 top-1/2 -translate-y-1/2 text-xs text-purple-600 whitespace-nowrap text-right',
              'transition-all duration-300 ease-in-out group-hover:text-blue-500 group-hover:font-semibold group-hover:-translate-x-2',
              className
            )}
          >
            {name}
          </button>
        </PopoverTrigger>
        <PopoverContent className="z-[100]" side="right">
          <div className="p-4">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-xs text-muted-foreground mt-1">Station Information</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
