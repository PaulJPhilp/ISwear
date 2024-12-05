import * as React from "react";
import { StationName } from "./StationName";
import type { Station } from "../../../types/station";

interface StationCardProps {
  station: Station;
}

export function StationCard({ station }: StationCardProps) {
  return (
    <div className="relative group bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
      <StationName
        name={station.name}
        content={{ render: () => Promise.resolve(station.content) }}
      />
      <div className="ml-[calc(50%+1rem)]">
        <h2 className="text-xl font-semibold text-white mb-2">Platform Information</h2>
        <p className="text-gray-400">
          Click the station name on the left for more details about this location.
        </p>
      </div>
    </div>
  );
}